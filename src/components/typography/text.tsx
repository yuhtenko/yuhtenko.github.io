import { styled } from '../theme';
import { toSpacing, toTypographyCss, Typography } from './typography';

export interface TextProps extends Typography {}

export const Text = styled('span', {
    name: 'Text',
})<TextProps>(({ theme, color, weight, align, spacing }) => {
    const common = toTypographyCss(theme, weight ?? 'normal', color, align);
    const spacingValues = toSpacing(spacing);

    return {
        ...theme.typography.variant.body1,
        ...common,
        marginBottom: spacingValues?.[0]
            ? theme.spacing(spacingValues[0])
            : theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.variant.body2,
            ...common,
            marginBottom: spacingValues?.[1]
                ? theme.spacing(spacingValues[1])
                : theme.spacing(0),
        },
    };
});
