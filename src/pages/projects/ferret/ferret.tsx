import React from 'react';
import Stack from '@mui/system/Stack';
import {
    Image,
    ImageCycle,
    ImageLayer,
    ImageList,
    ImageMask,
    LayeredImage,
} from '../../../components/image';
import {
    PageSection,
    ProjectHeroWorkSection,
    WorkSection,
} from '../../../components/sections';
import { SubSection } from '../../../components/sections/sub-section';
import { HalfCircle, Rectangle, Triangle } from '../../../components/shape';
import { styled, useTheme } from '../../../components/theme';
import { Paragraph } from '../../../components/typography';
import image1EcosystemBase from './assets/image-1-ecosystem-base.jpg';
import image1EcosystemCli from './assets/image-1-ecosystem-cli.jpg';
import image1EcosystemCore from './assets/image-1-ecosystem-core.jpg';
import image1EcosystemLab from './assets/image-1-ecosystem-lab.jpg';
import image1EcosystemWorker from './assets/image-1-ecosystem-worker.jpg';
import image1Terminal from './assets/image-1-terminal.gif';
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';
import image4Declarative from './assets/image-4-declarative.jpg';
import image4Dynamic from './assets/image-4-dynamic.jpg';
import image4Embeddable from './assets/image-4-embeddable.jpg';
import image4Secure from './assets/image-4-secure.jpg';
import image4 from './assets/image-4.jpg';
import image5 from './assets/image-5.jpg';
import image6 from './assets/image-6.jpg';
import { ImageView } from '../../../components/image/image-view';

const TerminalImageMask = styled(ImageMask)(({ theme }) => ({
    '& img': {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
    },
}));

export const PROJECT_ID = 'ferret';

export default function FerretProjectPage() {
    return (
        <>
            <ProjectHeroWorkSection
                projectId={PROJECT_ID}
                shapes={
                    <Stack
                        direction={'row'}
                        maxWidth={425}
                        width="100%"
                        justifyContent={'space-between'}
                    >
                        <Rectangle color="red" direction="up" />
                        <HalfCircle color="black" direction="up" />
                        <Triangle color="yellow" direction="up" />
                    </Stack>
                }
            />
            <PageSection id={'about'} heading={'About'} variant={'outline'}>
                <Paragraph>
                    The creation of Ferret aimed at revolutionizing the
                    extraction of data from the web. This project was initiated
                    with the purpose of elevation Ferret&apos;s branding through
                    a comprehensive revamp of its landing page and the creation
                    of a new, impactful logo. The ultimate goal was to attract a
                    wider user base and firmly establish Ferret as a leader in
                    its field.
                </Paragraph>
            </PageSection>
            <WorkSection
                id={'challenges'}
                heading={'CHALLENGES'}
                variant={'bold'}
            >
                <Paragraph>
                    Ferret&apos;s landing page and logo revamp faced challenges
                    of balancing creativity and practicality, communicating the
                    value proposition, maintaining consistency with existing
                    branding, and stakeholder collaboration. These challenges
                    were overcome through a collaborative design process
                    resulting in a website and logo that reflected Ferret&apos;s
                    mission and values.
                </Paragraph>
            </WorkSection>
            <WorkSection
                id={'process'}
                heading={['DESIGN', 'PROCESS']}
                variant={['bold', 'normal']}
                withSubSections
            >
                <SubSection heading="Briefing">
                    <Paragraph>
                        I asked my client to fill out the briefing form and
                        express more information about Ferret.
                    </Paragraph>
                </SubSection>
                <SubSection heading="Research & Competitor analysis">
                    <Paragraph>
                        I asked the client to provide me with examples of their
                        competitors along with design likes and dislikes. After
                        that I have done my own research to gain a deep
                        understanding of Ferret&apos;s target audience and their
                        needs. This research informed the creation of a design
                        brief that served as the foundation for the landing page
                        redesign and logo creation.
                    </Paragraph>
                    <Paragraph>
                        The logo creation process involved exploring multiple
                        design concepts that best embodied Ferret&apos;s mission
                        and values. I presented several options to the
                        stakeholders, who provided feedback and suggestions.
                        After several rounds of refinement, I arrived at the
                        final design that was a perfect representation of
                        Ferret&apos;s brand.
                    </Paragraph>
                </SubSection>
                <SubSection heading="Wireframes and Prototypes">
                    <Paragraph>
                        After research and collecting all the information I
                        started the wire-framing process. The prototyping stage
                        consisted of two steps: low-fidelity prototyping and
                        high-fidelity prototyping. At the same time, I tried out
                        different typographies and color palettes in order to
                        determine what would be the most suitable for the
                        project.
                    </Paragraph>
                </SubSection>
            </WorkSection>
            <WorkSection
                id={'desktop'}
                heading={['DESKTOP', 'PAGE']}
                variant={['bold', 'normal']}
            >
                <LayeredImage
                    src={image1}
                    justifyContent={'space-between'}
                    withBorder
                >
                    <ImageLayer top={'5%'} withBorder={['left', 'right']}>
                        <TerminalImageMask offsetX={'50%'}>
                            <Image src={image1Terminal} />
                        </TerminalImageMask>
                    </ImageLayer>
                    <ImageLayer bottom={'33.5%'} withBorder={['left', 'right']}>
                        <ImageCycle className="ecosystem-cycle">
                            <Image src={image1EcosystemBase} />
                            <Image src={image1EcosystemCore} />
                            <Image src={image1EcosystemWorker} />
                            <Image src={image1EcosystemLab} />
                            <Image src={image1EcosystemCli} />
                        </ImageCycle>
                    </ImageLayer>
                </LayeredImage>
            </WorkSection>
            <WorkSection
                id={'mobile'}
                heading={['MOBILE', 'ADAPTATION']}
                variant={['bold', 'normal']}
            >
                <ImageList>
                    <ImageView src={image2} withBorder />
                    <LayeredImage
                        src={image4}
                        justifyContent={'flex-end'}
                        withBorder
                    >
                        <ImageLayer withBorder={['bottom', 'left', 'right']}>
                            <ImageCycle className="ecosystem-cycle-mobile">
                                <Image src={image4Declarative} />
                                <Image src={image4Embeddable} />
                                <Image src={image4Secure} />
                                <Image src={image4Dynamic} />
                            </ImageCycle>
                        </ImageLayer>
                    </LayeredImage>
                    <ImageView src={image5} withBorder />
                    <ImageView src={image6} withBorder />
                    <ImageView src={image3} withBorder />
                </ImageList>
            </WorkSection>
        </>
    );
}
