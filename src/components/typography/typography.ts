import { CSSObject } from '@mui/styled-engine';
import { Color, FontWeight, Theme, toColor, toFontWeight } from '../theme';
import exp from 'node:constants';

export type Align = 'left' | 'center' | 'right';

export interface Typography {
    weight?: FontWeight;
    color?: Color;
    align?: Align;
    spacing?: number | [number, number];
}

export const toTypographyCss = (
    theme: Theme,
    weight: FontWeight = 'normal',
    color: Color = 'primary',
    align: Align = 'left'
): CSSObject => {
    return {
        fontWeight: toFontWeight(theme, weight),
        color: toColor(theme, color),
        textAlign: align,
    };
};

export const toSpacing = (
    value?: number | number[]
): [number, number] | undefined => {
    if (value == null) {
        return undefined;
    }

    if (Array.isArray(value)) {
        if (value.length > 0) {
            return [value[0], value[1] ?? value[0]];
        }

        return undefined;
    }

    return [value, value];
};
