import { styled } from '../theme';
import { Typography, toTypographyCss } from './typography';

export interface ParagraphProps extends Typography {}

export const Paragraph = styled('p', {
    name: 'Paragraph',
})<ParagraphProps>(({ theme, weight, color }) => {
    const common = toTypographyCss(theme, weight ?? 'normal', color);

    return {
        margin: 0,
        ...theme.typography.variant.body1,
        ...common,
        [theme.breakpoints.down('sm')]: {
            ...theme.typography.variant.body2,
            ...common,
        },
        '&:not(:last-child)': {
            marginBottom: theme.spacing(1),
        },
    };
});
