import React, { ReactElement } from 'react';
import { styled, useTheme } from '../theme';
import { useMediaQuery } from '@mui/system';
import { Text } from '../typography';
import { NavLink } from './nav-link';

export type NavMenuButtonVariant = 'open' | 'close';

export interface NavMenuButtonProps {
    className?: string;
    variant: NavMenuButtonVariant;
    onClick?: () => void;
}

const Wrapper = styled('div')<{ variant: NavMenuButtonVariant }>(
    ({ theme, variant }) => ({
        cursor: 'pointer',
        width: 'auto',
        height: 'auto',
    })
);

const SIZES = {
    xs: '26',
    default: '30',
};

export function NavMenuButton({
    className,
    variant,
    onClick,
}: NavMenuButtonProps): ReactElement {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up(768));
    const isSmall = useMediaQuery(theme.breakpoints.down(475));
    const size = isSmall ? SIZES.xs : SIZES.default;
    let icon;

    if (variant === 'open') {
        if (isDesktop) {
            icon = (
                <NavLink to="#" color="secondary">
                    Work
                </NavLink>
            );
        } else {
            icon = (
                <svg
                    width={size}
                    height={size}
                    strokeWidth="2px"
                    strokeLinecap="round"
                    stroke="white"
                >
                    <path d="M 1 1 H 29" />
                    <path d="M 1 13 H 29" />
                    <path d="M 1 25 H 29" />
                </svg>
            );
        }
    } else {
        if (isDesktop) {
            icon = (
                <NavLink
                    to="#"
                    color="secondary"
                    sx={{ opacity: 0, cursor: 'default' }}
                >
                    Work
                </NavLink>
            );
        } else {
            icon = (
                <svg
                    width={size}
                    height={size}
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke="white"
                    viewBox="0 0 30 26"
                >
                    <path d="M 1 1 L 29 25" />
                    <path d="M 29 1 L 1 25" />
                </svg>
            );
        }
    }

    return (
        <Wrapper className={className} variant={variant} onClick={onClick}>
            {icon}
        </Wrapper>
    );
}
