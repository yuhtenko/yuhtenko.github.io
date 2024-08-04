import { styled } from '../theme';
import { Link } from './link';

export const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.blue.main,
    fontWeight: theme.typography.fontWeight['semi-bold'],
    '&:visited': {
        color: theme.palette.blue.main,
    },
}));
