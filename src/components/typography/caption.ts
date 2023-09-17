import { styled } from '../theme';
import { Typography, toTypographyCss } from './typography';

export const Caption = styled('div')<Typography>(({ theme, weight, color }) => {
    const common = toTypographyCss(theme, weight ?? 'normal', color);

    return {
        ...theme.typography.variant.caption1,
        ...common,
        textTransform: 'none',
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.variant.caption1,
            ...common,
            textTransform: 'none',
        },
    };
});
