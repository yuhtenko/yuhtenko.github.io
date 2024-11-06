import { styled } from '../theme';
import { toSpacing, toTypographyCss, Typography } from './typography';

export const Caption = styled('div')<Typography>(({
    theme,
    weight,
    color,
    spacing,
}) => {
    const common = toTypographyCss(theme, weight ?? 'normal', color);
    const spacingValues = toSpacing(spacing);

    return {
        ...theme.typography.variant.caption1,
        ...common,
        textTransform: 'none',
        marginBottom: spacingValues?.[0]
            ? theme.spacing(spacingValues[0])
            : theme.spacing(0),
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.variant.caption1,
            ...common,
            textTransform: 'none',
            marginBottom: spacingValues?.[1]
                ? theme.spacing(spacingValues[1])
                : theme.spacing(0),
        },
    };
});
