import { styled } from '../theme';

export const BulletList = styled('ul')(({ theme }) => ({
    ...theme.typography.variant.body1,
    [theme.breakpoints.up('md')]: {
        ...theme.typography.variant.body2,
    },
}));
