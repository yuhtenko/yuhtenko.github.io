import React, { useCallback, useState } from 'react';
import Box from '@mui/system/Box';
import Stack, { StackProps } from '@mui/system/Stack';
import { NavItem } from '../link';
import { styled } from '../theme';
import { NavLink } from './nav-link';
import { NavMenuButton } from './nav-menu-button';

interface MenuProps {
    open: boolean;
}

const MENU_TOP_CLOSED = '-208px';

const MENU_SIZE_CLOSED = 232;
const MENU_SIZE_OPEN = 632;

const MENU_SIZE_CLOSED_SM = 160;
const MENU_SIZE_OPEN_SM = '200vw';

const Container = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const MenuWrapper = styled('div')(({ theme }) => ({
    position: 'relative',
    height: '100%',
    width: MENU_SIZE_CLOSED,
    [theme.breakpoints.down('sm')]: {
        width: MENU_SIZE_CLOSED_SM,
    },
}));

const Menu = styled('div')<MenuProps>(({ theme, open }) => {
    const size = open ? MENU_SIZE_OPEN : MENU_SIZE_CLOSED;

    return {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        backgroundColor: theme.palette.blue.main,
        top: !open ? MENU_TOP_CLOSED : '-424px',
        right: `0`,
        overflow: 'hidden',
        zIndex: 10,
        transition: `
            width ${theme.transitions.duration.normal}s ease-in-out,
            height ${theme.transitions.duration.normal}s ease-in-out,
            top  ${theme.transitions.duration.normal}s ease-in-out,
            right ${theme.transitions.duration.normal}s ease-in-out,
            left ${theme.transitions.duration.normal}s ease-in-out,
            margin ${theme.transitions.duration.normal}s ease-in-out
        `,
        [theme.breakpoints.down('md')]: {
            width: !open ? MENU_SIZE_CLOSED : '100vw',
            height: !open ? MENU_SIZE_CLOSED : '100vw',
            top: !open ? MENU_TOP_CLOSED : '-515px',
        },
        [theme.breakpoints.down('sm')]: {
            width: !open ? MENU_SIZE_CLOSED_SM : MENU_SIZE_OPEN_SM,
            height: !open ? MENU_SIZE_CLOSED_SM : MENU_SIZE_OPEN_SM,
            top: !open ? '-145px' : '-50vh',
            right: 0,
            ...(open && {
                margin: 'auto -50vw',
            }),
        },
    };
});

interface MenuListProps extends StackProps {
    open: boolean;
}

const MenuList = styled(Stack)<MenuListProps>(({ theme, open }) => ({
    maxWidth: '200px',
    opacity: !open ? 0 : 1,
    transition: open ? 'opacity 0.5s ease-in-out' : 'none',
    zIndex: 20,
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down(330)]: {
        marginBottom: theme.spacing(6),
    },
}));

interface ButtonWrapperProps {
    open: boolean;
}

const ButtonWrapper = styled('div')<ButtonWrapperProps>(({}) => ({
    width: '30px',
    zIndex: 20,
}));

export interface NavGroupProps {
    items: NavItem[];
}

export function NavMenu({ items }: NavGroupProps) {
    const [open, setOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <Container>
            <ButtonWrapper open={open} onClick={toggleOpen}>
                <NavMenuButton variant={open ? 'close' : 'open'} />
            </ButtonWrapper>
            <MenuWrapper>
                <Menu open={open}>
                    <MenuList
                        open={open}
                        spacing={{ xs: 4, sm: 4, md: 3 }}
                        alignItems={'center'}
                    >
                        {items.map((item) => (
                            <Box key={item.label} onClick={toggleOpen}>
                                <NavLink color={'secondary'} to={item.to}>
                                    {item.label}
                                </NavLink>
                            </Box>
                        ))}
                    </MenuList>
                </Menu>
            </MenuWrapper>
        </Container>
    );
}
