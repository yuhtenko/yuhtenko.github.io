import React, { PropsWithChildren } from 'react';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import Grid from '@mui/system/Unstable_Grid';
import { HalfCircle, Rectangle, Triangle } from '../shape';
import { styled, useTheme } from '../theme';
import { Heading } from '../typography';
import { PageSectionProps } from './page-section';

const HeroContainer = styled(Grid)(({ theme }) => ({
    minHeight: '88vh',
    paddingTop: '6vh',
}));

export interface HeroPageSectionProps
    extends Pick<PageSectionProps, 'heading'> {}

export function HeroPageSection({
    children,
    heading,
}: PropsWithChildren<HeroPageSectionProps>) {
    const theme = useTheme();
    return (
        <HeroContainer container>
            <Grid xs={2}>
                <Stack spacing={10} direction={'column'}>
                    <Rectangle color={'red'} size={40} direction={'right'} />
                    <HalfCircle color={'black'} size={40} direction={'right'} />
                    <Triangle color={'yellow'} size={40} direction={'right'} />
                </Stack>
            </Grid>
            <Grid container xs={10} paddingTop={{ xs: '10vh', md: '6vh' }}>
                <Stack spacing={2} direction={'column'}>
                    <Stack direction={'row'} spacing={1}>
                        {Array.isArray(heading) && heading.length > 0 && (
                            <Heading variant={['normal', 'outline']} noMargin>
                                {heading}
                            </Heading>
                        )}
                    </Stack>
                    {children}
                </Stack>
            </Grid>
        </HeroContainer>
    );
}
