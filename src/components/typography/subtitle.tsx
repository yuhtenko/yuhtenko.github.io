import { styled } from '../theme';
import { toSpacing, toTypographyCss, Typography } from './typography';

export interface SubtitleProps extends Typography {
    spacing?: number | [number, number];
}

export const Subtitle = styled('span')<SubtitleProps>(({
    theme,
    color,
    weight,
    spacing,
}) => {
    const common = toTypographyCss(
        theme,
        weight ?? 'medium',
        color ?? 'primary'
    );
    const spacingValues = toSpacing(spacing);

    return {
        ...theme.typography.variant.subtitle1,
        ...common,
        marginBottom: spacingValues?.[0]
            ? theme.spacing(spacingValues[0])
            : theme.spacing(2),
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.variant.subtitle2,
            ...common,
            marginBottom: spacingValues?.[1]
                ? theme.spacing(spacingValues[1])
                : '12px',
        },
    };
});
