import React, { ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import { NavItem } from '../link';
import { BackButton } from './back-button';
import { NavLink } from './nav-link';

export interface NavBarProps {
    showBackButton?: boolean;
    items: NavItem[];
}

const NavGrid = styled(Grid)(
    ({ theme }) => `
  height: ${theme.spacing(9)};
`
);

export function NavBar({ items, showBackButton }: NavBarProps): ReactElement {
    return (
        <NavGrid
            container
            spacing={2}
            alignContent={'flex-end'}
            justifyContent={'flex-end'}
        >
            {showBackButton && <BackButton />}
            <Stack direction="row" spacing={4}>
                {items?.map((i) => (
                    <NavLink key={i.to} to={i.to} isActive={i.isActive}>
                        {i.label}
                    </NavLink>
                ))}
            </Stack>
        </NavGrid>
    );
}
