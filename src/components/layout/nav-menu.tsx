import React, { useCallback, useState } from 'react';
import Box from '@mui/system/Box';
import Stack, { StackProps } from '@mui/system/Stack';
import { NavItem } from '../link';
import { styled } from '../theme';
import { NavLink } from './nav-link';
import { NavMenuButton } from './nav-menu-button';
import { ClickAwayListener } from '../utils';

interface MenuProps {
    open: boolean;
}

const MENU_TOP_CLOSED = '-208px';
const MENU_TOP_OPEN_SM = '-60vw';

const MENU_SIZE_CLOSED = 232;
const MENU_SIZE_OPEN = 632;

const MENU_SIZE_CLOSED_SM = 160;
const MENU_SIZE_OPEN_SM = '100vw';

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
        '& a': {
            pointerEvents: open ? 'auto' : 'none', // fixes a bug when another link gets clicked when the menu is closed and the menu opens
        },
        [theme.breakpoints.down(700)]: {
            width: !open ? MENU_SIZE_CLOSED : MENU_SIZE_OPEN_SM,
            height: !open ? MENU_SIZE_CLOSED : MENU_SIZE_OPEN_SM,
            top: !open ? MENU_TOP_CLOSED : MENU_TOP_OPEN_SM,
        },
        [theme.breakpoints.down(425)]: {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            width: !open ? MENU_SIZE_CLOSED_SM : MENU_SIZE_OPEN_SM,
            height: !open ? MENU_SIZE_CLOSED_SM : MENU_SIZE_OPEN_SM,
            top: !open ? '-145px' : MENU_TOP_OPEN_SM,
            right: 0,
        },
    };
});

interface MenuListProps extends StackProps {
    open: boolean;
}

const MenuList = styled(Stack)<MenuListProps>(({ theme, open }) => ({
    width: '100%',
    maxWidth: '200px',
    opacity: !open ? 0 : 1,
    transition: open ? 'opacity 0.5s ease-in-out' : 'none',
    zIndex: 20,
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.down(330)]: {
        marginBottom: theme.spacing(3),
    },
}));

const MenuNavLink = styled(NavLink)(({ theme, isActive }) => ({
    userSelect: 'none',
    fontWeight: isActive
        ? `${theme.typography.fontWeight.bold} !important`
        : 'normal',
    '&:hover': {
        fontWeight: theme.typography.fontWeight.medium,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: '20px',
        lineHeight: '30px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        lineHeight: '26px',
    },
    [theme.breakpoints.down(330)]: {
        fontSize: '14px',
        lineHeight: '20px',
    },
}));

interface ButtonWrapperProps {
    open: boolean;
}

const ButtonWrapper = styled('div')<ButtonWrapperProps>(({ theme }) => ({
    width: 'auto',
    zIndex: 20,
    [theme.breakpoints.down('sm')]: {
        position: 'relative',
        right: '35px',
    },
    [theme.breakpoints.down(425)]: {
        right: '0',
    },
}));

export interface NavGroupProps {
    items: NavItem[];
}

export function NavMenu({ items }: NavGroupProps) {
    const [open, setOpen] = useState(false);
    const toggleOpen = useCallback(() => {
        setOpen(!open);
    }, [open]);
    const close = useCallback(() => {
        setOpen(false);
    }, []);

    return (
        <ClickAwayListener disable={!open} onClickAway={close}>
            <Container>
                <ButtonWrapper open={open} onClick={toggleOpen}>
                    <NavMenuButton variant={open ? 'close' : 'open'} />
                </ButtonWrapper>
                <MenuWrapper>
                    <Menu open={open}>
                        <MenuList
                            open={open}
                            spacing={{ xs: 1, md: 2 }}
                            alignItems={'center'}
                        >
                            {items.map((item) => (
                                <Box key={item.label} onClick={toggleOpen}>
                                    <MenuNavLink
                                        color={'secondary'}
                                        to={item.to}
                                        isActive={item.isActive}
                                    >
                                        {item.label}
                                    </MenuNavLink>
                                </Box>
                            ))}
                        </MenuList>
                    </Menu>
                </MenuWrapper>
            </Container>
        </ClickAwayListener>
    );
}
