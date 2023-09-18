import React, { ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import { ArrowUpIcon } from '../icons';
import { ScrollAnchor } from '../scroll-to-anchor';
import { Rectangle, Triangle } from '../shape';
import { styled, useTheme } from '../theme';

const FooterRoot = styled(Stack)(({ theme }) => {
    const [lg, md] = theme.sizes.spacing.section1;

    return {
        marginTop: '128px',
        [theme.breakpoints.down('md')]: {
            padding: `0 ${theme.spacing(2)}`,
            marginTop: '84px',
        },
    };
});

const Copyright = styled('span')(({ theme }) => ({
    height: '40px',
}));

export function Footer(): ReactElement {
    const theme = useTheme();

    return (
        <FooterRoot direction={'column'} spacing={3}>
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                spacing={4}
                alignItems={'flex-end'}
            >
                <Stack direction={'row'} alignItems={'flex-end'} spacing={4}>
                    <Rectangle
                        className="footer-shape"
                        position="relative"
                        direction="right"
                        color="red"
                    />

                    <Triangle
                        className="footer-shape"
                        position="relative"
                        direction="up"
                        color="black"
                    />
                </Stack>
                <ScrollAnchor to="page-root">
                    <ArrowUpIcon />
                </ScrollAnchor>
            </Stack>
            <Copyright id="footer-copyright">
                {new Date().getFullYear()} All rights reserved
            </Copyright>
        </FooterRoot>
    );
}
