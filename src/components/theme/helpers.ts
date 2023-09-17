import { CSSProperties } from 'react';
import { styled as muiStyled } from '@mui/system';
import { CreateMUIStyled } from '@mui/system/createStyled';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';
import { ShapeBreakpoint, ShapeSize } from '../shape';
import { Color, FontTransform, FontWeight, Theme } from './theme';

export const styled: CreateMUIStyled<Theme> =
    muiStyled as any as CreateMUIStyled<Theme>;

export const toColor = (theme: Theme, color?: Color) =>
    theme.palette[color!]?.main ?? theme.palette.primary.main;

export const toFontWeight = (theme: Theme, fontWeight: FontWeight = 'normal') =>
    theme.typography.fontWeight[fontWeight!] ??
    theme.typography.fontWeight.normal;

export const toFontTransform = (_: Theme, transform?: FontTransform) =>
    transform ?? 'none';

export const mergeCss = (...css: CSSProperties[]) => {
    return css.reduce((acc, curr) => {
        const res = acc;
        const keys = Object.keys(curr) as (keyof CSSProperties)[];

        keys.forEach((key) => {
            const prop = curr[key];
            const currProp = res[key];

            if (!currProp) {
                (res as any)[key] = prop;
            } else if (
                typeof currProp === 'object' &&
                typeof prop === 'object'
            ) {
                (res as any)[key] = {
                    ...(currProp as object),
                    ...(prop as object),
                };
            }
        });

        return res;
    }, {});
};

export const mapSize = (
    theme: Theme,
    size: ShapeSize,
    predicate: (size: number) => CSSProperties
) => {
    if (typeof size === 'number') {
        return predicate(size);
    }

    const breakpoints = Object.keys(size) as Breakpoint[];

    return breakpoints.reduce(
        (acc: Record<string, CSSProperties>, key: ShapeBreakpoint) => {
            let res = acc;

            if (key === 'default') {
                res = {
                    ...res,
                    ...predicate(size[key]!),
                } as any;
            } else {
                (res as Record<string, CSSProperties>)[
                    theme.breakpoints.up(key)
                ] = predicate(size[key]!);
            }

            return res;
        },
        {}
    );
};
