import { styled } from '../theme';
import { Typography, toTypographyCss, toSpacing } from './typography';

export interface ParagraphProps extends Typography {}

export const Paragraph = styled('p', {
    name: 'Paragraph',
})<ParagraphProps>(({ theme, weight, color, spacing }) => {
    const common = toTypographyCss(theme, weight ?? 'normal', color);
    const spacingValues = toSpacing(spacing);

    return {
        margin: 0,
        ...theme.typography.variant.body1,
        ...common,
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.variant.body2,
            ...common,
            '&:not(:last-child)': {
                marginBottom: spacingValues?.[1]
                    ? theme.spacing(spacingValues[1])
                    : theme.spacing(0),
            },
        },
        '&:not(:last-child)': {
            marginBottom: spacingValues?.[0]
                ? theme.spacing(spacingValues[0])
                : theme.spacing(1),
        },
    };
});
