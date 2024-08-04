import React from 'react';
import Stack from '@mui/system/Stack';
import { Image, ImageList } from '../../../components/image';
import {
    PageSection,
    ProjectHeroWorkSection,
    WorkSection,
} from '../../../components/sections';
import { SubSection } from '../../../components/sections/sub-section';
import { HalfCircle, Rectangle, Triangle } from '../../../components/shape';
import { styled } from '../../../components/theme';
import { Paragraph, Text } from '../../../components/typography';
import catDesktop from './assets/cat-desktop.jpg';
import catMobileAdopt from './assets/cat-mobile-adopt.jpg';
import catMobileLuna from './assets/cat-mobile-luna.jpg';
import catMobileStore from './assets/cat-mobile-store.jpg';
import { List } from '../../../components/list/list';

const CatShelterHeroSection = styled(ProjectHeroWorkSection)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        '& .hero-number, .hero-heading': {
            ...theme.typography.variant.h3,
            textTransform: 'none',
            fontWeight: theme.typography.fontWeight.bold,
        },
    },
    [theme.breakpoints.down(476)]: {
        '& .hero-number, .hero-heading': {
            ...theme.typography.variant.h4,
            textTransform: 'none',
            fontWeight: theme.typography.fontWeight.bold,
        },
    },
    [theme.breakpoints.down(371)]: {
        '& .hero-number, .hero-heading': {
            ...theme.typography.variant.h5,
            textTransform: 'none',
            fontWeight: theme.typography.fontWeight.bold,
        },
    },
    [theme.breakpoints.down(321)]: {
        '& .hero-number, .hero-heading': {
            ...theme.typography.variant.h6,
            textTransform: 'none',
            fontWeight: theme.typography.fontWeight.bold,
        },
    },
}));

export const PROJECT_ID = 'cat-shelter';

// &nbps; as a space code in HTML - https://www.w3schools.com/html/html_entities.asp
export default function CatShelterProjectPage() {
    return (
        <>
            <CatShelterHeroSection
                projectId={PROJECT_ID}
                heading={'Cat\u00A0Angels Pet\u00A0Adoptions'}
                shapes={
                    <Stack
                        direction={'column'}
                        justifyContent={'space-between'}
                        spacing={6}
                        maxWidth={425}
                        width="100%"
                        margin={0}
                    >
                        <Stack direction={'row'}>
                            <Triangle color="black" direction="up" />
                        </Stack>
                        <Stack direction={'row'} justifyContent={'center'}>
                            <HalfCircle color="red" direction="up" />
                        </Stack>
                        <Stack direction={'row'} justifyContent={'flex-end'}>
                            <Rectangle color="yellow" direction="up" />
                        </Stack>
                    </Stack>
                }
            />
            <PageSection id={'about'} heading={'About'} variant={'outline'}>
                <Paragraph>
                    I had the pleasure of volunteering at Cat Angels Pet
                    Adoption for an extended period of time. As a photographer,
                    my main job was to create high-quality content for their
                    website and social media accounts. Once I started studying
                    UX/UI design, I felt an urge to improve their website.
                </Paragraph>
                <Paragraph>
                    Unfortunately, as we all know, animal shelters usually lack
                    resources, and allocating them towards website development,
                    user research, and UX design is definitely not their top
                    priority. A high-quality landing page, along with bright,
                    beautiful photos, can showcase the cats available for
                    adoption in an attractive and engaging way, which may
                    encourage more people to adopt a cat. It can also help raise
                    awareness of the existence of this particular cat shelter
                    and its mission.
                </Paragraph>
            </PageSection>
            <WorkSection
                id={'challenges'}
                heading={'CHALLENGES'}
                variant={'bold'}
            >
                <Paragraph>
                    Creating a successful landing page for a cat shelter
                    requires a careful balance of visual appeal,
                    user-friendliness, and emotional content, while prioritizing
                    the most important information and features for the
                    audience. Here are some of the challenges that I had to face
                    in the process of designing the landing page:
                </Paragraph>
                <List
                    items={[
                        'Information architecture: organizing information on the landing page to be easily navigable and identifying the most important information and features.',
                        'Emotional content: finding the right balance between compelling content and a user-friendly design, without overloading the page with emotional content that may turn potential visitors away.',
                        'Limited attention span: creating a landing page that quickly captures user attention, with clear call-to-action buttons.',
                    ]}
                    variant={'unordered'}
                />
            </WorkSection>
            <WorkSection
                id={'process'}
                heading={['DESIGN', 'PROCESS']}
                variant={['bold', 'normal']}
                withSubSections
            >
                <SubSection heading="Research & Define">
                    <Paragraph>
                        I have done my own research to gain a deep understanding
                        of animal shelters audience and their needs, the
                        potential problems that could lead to fewer adoptions
                        and lower awareness of the shelter&apos;s mission.
                    </Paragraph>
                </SubSection>

                <SubSection heading="Information Architecture and Content Strategy">
                    <Paragraph>
                        I organized the content and structure of the landing
                        page to ensure that the most important information and
                        features were prioritized and easily accessible. Also I
                        developed a content strategy that balances emotional
                        content with a user-friendly design.
                    </Paragraph>
                </SubSection>
                <SubSection heading={'Wireframes and Prototypes'}>
                    <Paragraph>
                        Using the research and information architecture as a
                        guide, I sketched out different design ideas for the
                        landing page, created low-fidelity wireframes to explore
                        different layout options and iterated on the design. At
                        the same time, I tried out different typographies and
                        color palettes in order to determine what would be the
                        most suitable for the project. Once I chose appropriate
                        colors, typography, and imagery to create an emotionally
                        resonant design, I started refining the wireframe into
                        high-fidelity design along with a clickable prototype.
                    </Paragraph>
                </SubSection>
            </WorkSection>
            <WorkSection
                id={'desktop'}
                heading={['DESKTOP', 'PAGE']}
                variant={['bold', 'normal']}
            >
                <Image src={catDesktop} withBorder />
            </WorkSection>
            <WorkSection
                id={'mobile'}
                heading={['MOBILE', 'ADAPTATION']}
                variant={['bold', 'normal']}
            >
                <ImageList>
                    <Image src={catMobileAdopt} withBorder />
                    <Image src={catMobileLuna} withBorder />
                    <Image src={catMobileStore} withBorder />
                </ImageList>
            </WorkSection>
        </>
    );
}
