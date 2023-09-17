import React from 'react';
import Stack from '@mui/system/Stack';
import {
    AimIcon,
    BrowserIcon,
    BulbIcon,
    LensIcon,
} from '../../../components/icons';
import {
    Image,
    ImageCycle,
    ImageLayer,
    ImageList,
    LayeredImage,
} from '../../../components/image';
import { DesignProcess } from '../../../components/process';
import {
    HeroWorkSection,
    PageSection,
    WorkSection,
} from '../../../components/sections';
import { HalfCircle, Rectangle, Triangle } from '../../../components/shape';
import { styled } from '../../../components/theme';
import { Paragraph } from '../../../components/typography';
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';
import image4_1 from './assets/image-4-1.jpg';
import image4_2 from './assets/image-4-2.jpg';
import image4_3 from './assets/image-4-3.jpg';
import image4 from './assets/image-4.jpg';
import image5 from './assets/image-5.jpg';
import image6 from './assets/image-6.jpg';

const LedScreenHeroSection = styled(HeroWorkSection)(({ theme }) => ({
    [theme.breakpoints.down(476)]: {
        '& .hero-number, .hero-heading': {
            ...theme.typography.variant.h3,
            textTransform: 'none',
            fontWeight: theme.typography.fontWeight.bold,
        },
    },
    [theme.breakpoints.down(371)]: {
        '& .hero-number, .hero-heading': {
            ...theme.typography.variant.h4,
            textTransform: 'none',
            fontWeight: theme.typography.fontWeight.bold,
        },
    },
}));

export default function LedScreenProjectPage() {
    return (
        <>
            <LedScreenHeroSection
                id="hero-section"
                number="02"
                heading="LedScreen"
                description="a service for speedy uploading of commercials onto city screens"
                shapes={
                    <Stack
                        direction={'column'}
                        justifyContent={'space-between'}
                        spacing={6}
                        maxWidth={425}
                        width="100%"
                        margin={0}
                    >
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <Rectangle color="red" direction="up" />
                        </Stack>
                        <Stack direction={'row'} justifyContent={'center'}>
                            <HalfCircle color="black" direction="up" />
                        </Stack>
                        <Stack direction={'row'}>
                            <Triangle color="yellow" direction="up" />
                        </Stack>
                    </Stack>
                }
            />
            <PageSection id={'about'} heading={'About'} variant={'outline'}>
                <Paragraph>
                    The goal of the project was to create a service that
                    simplifies the process of displaying and uploading
                    commercials on LED screens for advertisers and helps LED
                    screen owners find customers. The service aims to save the
                    time for advertisers by eliminating the need to travel to
                    rental agencies amd also gives more freedom to choose the
                    time and place of their ad broadcasts. For LED screen
                    owners, the service aims to provide a steady stream of
                    clients, reducing the need to search for customers and
                    saving time and money.
                </Paragraph>
            </PageSection>
            <WorkSection
                id={'challenges'}
                heading={'CHALLENGES'}
                variant={'bold'}
            >
                <Paragraph>
                    The process of creating such a service can be complex, and
                    there were several design challenges that I have faced. One
                    of the most critical considerations was providing an
                    excellent user experience for both advertisers and LED panel
                    owners. The service’s interface should be user-friendly,
                    even for people with limited technical expertise. Another
                    challenge was ensuring the service is responsive, meaning it
                    must work smoothly on a wide range of devices. The service
                    may need to integrate with third-party services, such as
                    payment processors or data analytics tools. The design must
                    take into account the requirements of these services and
                    ensure that the integration is seamless and does not disrupt
                    the user experience.
                </Paragraph>
            </WorkSection>
            <WorkSection
                id={'process'}
                heading={['DESIGN', 'PROCESS']}
                variant={['bold', 'normal']}
            >
                <DesignProcess>
                    <DesignProcess.Step
                        key={'discover'}
                        shape={<Rectangle color={'blue'} direction={'left'} />}
                        icon={<LensIcon />}
                        title={'Discover'}
                        actions={[
                            'User research',
                            'User interviews',
                            'Competitive Analysis',
                        ]}
                        position={'left'}
                    />
                    <DesignProcess.Step
                        key={'define'}
                        shape={
                            <HalfCircle color={'yellow'} direction={'right'} />
                        }
                        icon={<AimIcon />}
                        title={'Define'}
                        actions={[
                            'User personas',
                            'Empathy map',
                            'User journey map',
                        ]}
                        position={'left'}
                    />
                    <DesignProcess.Step
                        key={'ideate'}
                        shape={<Triangle direction={'left'} />}
                        icon={<BulbIcon />}
                        title={'Ideate'}
                        actions={[
                            'User flow',
                            'Card sorting',
                            'Information architecture',
                        ]}
                        position={'right'}
                    />
                    <DesignProcess.Step
                        key={'design'}
                        shape={<Rectangle color={'red'} direction={'left'} />}
                        icon={<BrowserIcon />}
                        title={'Design'}
                        actions={['Wireframes', 'Hi-Fi designs', 'Prototype']}
                        position={'right'}
                    />
                </DesignProcess>
            </WorkSection>
            <WorkSection
                id={'desktop'}
                heading={['DESKTOP', 'PAGE']}
                variant={['bold', 'normal']}
            >
                <Stack direction={'column'} spacing={3}>
                    <Image src={image1} withBorder />
                    <ImageList>
                        <Image src={image2} withBorder />
                        <Image src={image3} withBorder />
                    </ImageList>
                </Stack>
            </WorkSection>
            <WorkSection
                id={'mobile'}
                heading={['MOBILE', 'ADAPTATION']}
                variant={['bold', 'normal']}
            >
                <ImageList>
                    <LayeredImage src={image4} withBorder>
                        <ImageLayer top={'29%'} withBorder={['left', 'right']}>
                            <ImageCycle
                                className="led-home-cycle-mobile"
                                interval={2000}
                            >
                                <Image src={image4_1} />
                                <Image src={image4_2} />
                                <Image src={image4_3} />
                            </ImageCycle>
                        </ImageLayer>
                    </LayeredImage>
                    <Image src={image5} withBorder />
                    <Image src={image6} withBorder />
                </ImageList>
            </WorkSection>
        </>
    );
}
