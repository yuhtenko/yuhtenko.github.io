import React, { PropsWithChildren } from 'react';
import Container from '@mui/system/Container';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import 'react-photo-view/dist/react-photo-view.css';
import { NavItem } from '../link';
import { Content, ContentSpacing } from './content';
import { Footer } from './footer';
import { Header } from './index';

export interface LayoutProps extends PropsWithChildren {
    className?: string;
    headerNav: NavItem[];
    headerWork: NavItem[];
    withHomeButton?: boolean;
    contentSpacing?: ContentSpacing;
}

export const LayoutFooter = styled(Footer)(({ theme }) => ({
    marginTop: 150,
}));

export function Layout({
    headerNav,
    headerWork,
    withHomeButton,
    contentSpacing,
    children,
}: LayoutProps) {
    return (
        <Container id={'page-root'} maxWidth="xl" disableGutters>
            <Grid
                container
                direction={'row'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                flexWrap={'nowrap'}
            >
                <Grid xs={12} md={10}>
                    <Header
                        links={headerNav}
                        work={headerWork}
                        withHomeButton={withHomeButton}
                    />
                    <Content spacing={contentSpacing}>{children}</Content>
                    <LayoutFooter />
                </Grid>
            </Grid>
        </Container>
    );
}
