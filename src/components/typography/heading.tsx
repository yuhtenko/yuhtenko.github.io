import React, { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { CSSObject } from '@mui/styled-engine';
import { Color, Theme, styled, toColor } from '../theme';

type TextTransform =
    | 'none'
    | 'capitalize'
    | 'uppercase'
    | 'lowercase'
    | 'initial'
    | 'inherit';

export type HeadingSize =
    | 'title'
    | 'heading1'
    | 'heading2'
    | 'subheading1'
    | 'subheading2';

export type HeadingVariant = 'normal' | 'bold' | 'outline';

export type HeadingVariantTuple = [HeadingVariant, HeadingVariant];

function toTextTransform(size: HeadingSize): TextTransform {
    switch (size) {
        case 'heading1':
        case 'heading2':
            return 'uppercase';
        default:
            return 'none';
    }
}

function toTextDecoration(
    theme: Theme,
    variant: HeadingVariant,
    color?: Color
): CSSObject | undefined {
    if (variant === 'outline') {
        return {
            WebkitTextFillColor: 'white',
            WebkitTextStrokeWidth: 1,
            WebkitTextStrokeColor: color
                ? toColor(theme, color)
                : theme.palette.primary.main,
        };
    }

    return undefined;
}

function toFontColor(theme: Theme, color: Color): CSSObject {
    return {
        color: toColor(theme, color),
    };
}

function toFontWeight(
    theme: Theme,
    size: HeadingSize,
    variant: HeadingVariant
): CSSObject {
    switch (size) {
        case 'title': {
            return {
                fontWeight: theme.typography.fontWeight.bold,
            };
        }
        case 'subheading1':
        case 'subheading2': {
            if (variant === 'outline' || variant === 'bold') {
                return {
                    fontWeight: theme.typography.fontWeight.medium,
                };
            }

            return {
                fontWeight: theme.typography.fontWeight.normal,
            };
        }
        default: {
            if (variant === 'outline') {
                return {
                    fontWeight: theme.typography.fontWeight.medium,
                };
            }

            if (variant === 'bold') {
                return {
                    fontWeight: theme.typography.fontWeight['semi-bold'],
                };
            }

            return {
                fontWeight: theme.typography.fontWeight.normal,
            };
        }
    }
}

type ResponsiveFontSize =
    | [CSSObject, CSSObject] // xl, sm
    | [CSSObject, CSSObject, CSSObject]; // xl, sm, xs

function toFontSize(theme: Theme, size: HeadingSize): ResponsiveFontSize {
    switch (size) {
        case 'title': {
            return [
                theme.typography.variant.h1,
                theme.typography.variant.h2,
                theme.typography.variant.h3,
            ];
        }
        case 'subheading1': {
            return [theme.typography.variant.h7, theme.typography.variant.h8];
        }
        case 'subheading2': {
            return [theme.typography.variant.h9, theme.typography.variant.h10];
        }
        case 'heading1': {
            return [theme.typography.variant.h4, theme.typography.variant.h5];
        }
        default: {
            return [theme.typography.variant.h6, theme.typography.variant.h7];
        }
    }
}

type ResponsiveSpacing = [string, string];

function toSpacing(theme: Theme, size: HeadingSize): ResponsiveSpacing {
    const [xl, sm] = theme.sizes.spacing[size];

    return [theme.spacing(xl), theme.spacing(sm)];
}

function resolveVariants(
    variant: HeadingVariant | HeadingVariant[]
): HeadingVariantTuple {
    if (Array.isArray(variant)) {
        switch (variant.length) {
            case 0: {
                return ['normal', 'normal'];
            }
            case 1: {
                return resolveVariants(variant[0]);
            }
            case 2: {
                return variant as HeadingVariantTuple;
            }
            default: {
                return [variant[0], variant[1]];
            }
        }
    }

    switch (variant) {
        case 'outline':
            return ['outline', 'normal'];
        case 'bold':
            return ['bold', 'normal'];
        default:
            return ['normal', 'normal'];
    }
}

interface HeadingBaseProps {
    size: HeadingSize;
    variant: HeadingVariant;
    noMargin?: boolean;
    color?: Color;
}

const HeadingBase = styled('span')<HeadingBaseProps>(({
    theme,
    variant,
    noMargin,
    color,
    size,
    children,
}) => {
    const [desktop, tablet, phone] = toFontSize(theme, size);
    const fontColor = toFontColor(theme, color || 'primary');
    const textDecoration = toTextDecoration(theme, variant, color);
    const weight = toFontWeight(theme, size, variant);
    const [marginXl, marginXs] = !noMargin
        ? toSpacing(theme, size)
        : ['0', '0'];
    const textTransform = toTextTransform(size);

    return {
        display: 'inline-block',
        '&:not(:last-child)': {
            marginRight: !noMargin ? '12px' : '0',
        },
        ...desktop,
        ...weight,
        ...textDecoration,
        ...fontColor,
        textTransform,
        marginBottom: marginXl,
        [theme.breakpoints.down('md')]: {
            ...tablet,
            ...weight,
            ...textDecoration,
            ...fontColor,
            marginBottom: marginXs,
            textTransform,
        },
        ...(phone && {
            [theme.breakpoints.down(340)]: {
                ...phone,
                ...weight,
                ...textDecoration,
                ...fontColor,
                marginBottom: marginXs,
                textTransform,
            },
        }),
    };
});

export interface HeadingProps
    extends Omit<HeadingBaseProps, 'variant' | 'size'> {
    variant?: HeadingVariant | HeadingVariantTuple;
    size?: HeadingSize;
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

export function Heading({
    color,
    size = 'heading1',
    variant = 'normal',
    noMargin = false,
    className,
    style,
    children,
    onClick,
}: PropsWithChildren<HeadingProps>) {
    const nodes = React.Children.toArray(children);
    const [fist, ...rest] = nodes as [ReactElement, ...ReactElement[]];
    const [leading, trailing] = resolveVariants(variant);

    return (
        <>
            <HeadingBase
                size={size}
                variant={leading}
                className={className}
                style={style}
                noMargin={noMargin}
                color={color}
                aria-valuetext={fist?.toString()}
                onClick={onClick}
            >
                {fist}
            </HeadingBase>
            {nodes.length > 1 &&
                rest.map((child, index) => (
                    <HeadingBase
                        size={size}
                        key={`heading-${index}`}
                        variant={trailing}
                        noMargin={noMargin}
                        className={className}
                        style={style}
                        color={color}
                        aria-valuetext={child?.toString()}
                        onClick={onClick}
                    >
                        {child}
                    </HeadingBase>
                ))}
        </>
    );
}
