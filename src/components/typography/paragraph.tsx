import { styled } from '../theme';
import { toSpacing, toTypographyCss, Typography } from './typography';

export interface ParagraphProps extends Typography {
    fontStyle?: 'normal' | 'italic';
}

export const Paragraph = styled('p', {
    name: 'Paragraph',
})<ParagraphProps>(({ theme, weight, color, spacing, fontStyle }) => {
    const common = toTypographyCss(theme, weight ?? 'normal', color);
    const spacingValues = toSpacing(spacing);

    return {
        margin: 0,
        ...theme.typography.variant.body1,
        ...common,
        fontStyle: fontStyle ?? 'normal',
        '&:not(:last-child)': {
            marginBottom: spacingValues?.[0]
                ? theme.spacing(spacingValues[0])
                : theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.variant.body2,
            ...common,
            fontStyle: fontStyle ?? 'normal',
            '&:not(:last-child)': {
                marginBottom: spacingValues?.[1]
                    ? theme.spacing(spacingValues[1])
                    : theme.spacing(0),
            },
        },
    };
});
