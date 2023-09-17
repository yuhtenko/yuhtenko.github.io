import { Link, LinkProps } from '../link';
import { Color, styled, toColor } from '../theme';

export interface NavLinkProps extends LinkProps {
    color?: Color;
}

export const NavLink = styled(Link)<NavLinkProps>(({ theme, color }) => ({
    ...theme.typography.variant.link1,
    color: toColor(theme, color),
    [theme.breakpoints.down('md')]: {
        ...theme.typography.variant.link2,
    },
}));
