import React from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import { GridProps } from '@mui/system/Unstable_Grid';
import { NavItem } from '../link';
import { styled } from '../theme';
import { BackButton } from './back-button';
import { NavLink } from './nav-link';
import { NavMenu } from './nav-menu';

const HeaderContainer = styled(Stack)<GridProps>(({ theme }) => ({
    height: '12vh',
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(2),
    },
    '& > div': {
        marginTop: `${theme.spacing(4)} !important`,
        [theme.breakpoints.down('md')]: {
            marginTop: `${theme.spacing(3)} !important`,
        },
    },
}));

const HeaderBar = styled(Stack)(({ theme }) => ({
    height: '40px',
}));

const HeaderBarLink = styled(NavLink)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
}));

export interface HeaderProps {
    links: NavItem[];
    work: NavItem[];
    withHomeButton?: boolean;
}

export function Header({ links, work, withHomeButton }: HeaderProps) {
    return (
        <HeaderContainer
            direction="row"
            justifyContent={withHomeButton ? 'space-between' : 'flex-end'}
            alignItems={'flex-start'}
            spacing={1}
        >
            {withHomeButton && (
                <Box>
                    <BackButton />
                </Box>
            )}
            <HeaderBar direction="row" alignItems={'center'} spacing={4}>
                {links?.map((i) => (
                    <HeaderBarLink key={i.to} to={i.to} isActive={i.isActive}>
                        {i.label}
                    </HeaderBarLink>
                ))}

                <NavMenu key={'menu'} items={work} />
            </HeaderBar>
        </HeaderContainer>
    );
}
