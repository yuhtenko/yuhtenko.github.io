import { CSSObject } from '@mui/styled-engine';
import { Theme } from '../theme';

export type BorderSide = 'top' | 'bottom' | 'left' | 'right';

export function toBorder(
    theme: Theme,
    withBorder?: boolean | BorderSide[]
): CSSObject | null {
    if (!withBorder) {
        return null;
    }

    const color = theme.palette.black.light ?? theme.palette.black.main;

    if (withBorder === true) {
        return {
            border: `1px solid ${color}`,
            borderRadius: theme.shape.borderRadius,
        };
    }

    const set = new Set(withBorder);
    const obj: CSSObject = {};
    const borderStyle = `1px solid ${color}`;

    if (set.has('top')) {
        obj.borderTop = borderStyle;
    }

    if (set.has('bottom')) {
        obj.borderBottom = borderStyle;
    }

    if (set.has('left')) {
        obj.borderLeft = borderStyle;

        if (set.has('top')) {
            obj.borderTopLeftRadius = theme.shape.borderRadius;
        }

        if (set.has('bottom')) {
            obj.borderBottomLeftRadius = theme.shape.borderRadius;
        }
    }

    if (set.has('right')) {
        obj.borderRight = borderStyle;

        if (set.has('top')) {
            obj.borderTopRightRadius = theme.shape.borderRadius;
        }

        if (set.has('bottom')) {
            obj.borderBottomRightRadius = theme.shape.borderRadius;
        }
    }

    return obj;
}
