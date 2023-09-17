import { CSSObject } from '@mui/styled-engine';
import { Color, FontWeight, Theme, toColor, toFontWeight } from '../theme';

export type Align = 'left' | 'center' | 'right';

export interface Typography {
    weight?: FontWeight;
    color?: Color;
    align?: Align;
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
