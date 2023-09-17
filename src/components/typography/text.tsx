import { styled } from '../theme';
import { Typography, toTypographyCss } from './typography';

export interface TextProps extends Typography {}

export const Text = styled('span', {
    name: 'Text',
})<TextProps>(({ theme, color, weight, align }) => {
    const common = toTypographyCss(theme, weight ?? 'normal', color, align);

    return {
        ...theme.typography.variant.body1,
        ...common,
        [theme.breakpoints.down('md')]: {
            ...theme.typography.variant.body2,
            ...common,
        },
    };
});
