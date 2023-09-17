import React, { ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import { ArrowUpIcon } from '../icons';
import { ScrollAnchor } from '../scroll-to-anchor';
import { Rectangle, Triangle } from '../shape';
import { styled, useTheme } from '../theme';

const Container = styled(Stack)(({ theme }) => {
    const [lg, md] = theme.sizes.spacing.section1;

    return {
        marginTop: theme.spacing(lg),
        [theme.breakpoints.down('md')]: {
            padding: `0 ${theme.spacing(2)}`,
            marginTop: theme.spacing(md),
        },
    };
});

export function Footer(): ReactElement {
    const theme = useTheme();

    return (
        <Container direction={'column'}>
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
            <Stack
                direction={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                sx={{ height: '80px' }}
            >
                <span id="footer-copyright" className="copyright">
                    {new Date().getFullYear()} All rights reserved
                </span>

                <ScrollAnchor to="page-root">
                    <ArrowUpIcon />
                </ScrollAnchor>
            </Stack>
        </Container>
    );
}
