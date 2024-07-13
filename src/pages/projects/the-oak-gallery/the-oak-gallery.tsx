import Stack from '@mui/system/Stack';
import { HalfCircle, Rectangle, Triangle } from '../../../components/shape';
import {
    PageSection,
    ProjectHeroWorkSection,
    WorkSection,
} from '../../../components/sections';
import {
    Heading,
    Paragraph,
    Subtitle,
    Text,
} from '../../../components/typography';
import React from 'react';
import { styled } from '../../../components/theme';
import { WorkSubsection } from '../../../components/sections/work-subsection';
import { DesignProcess } from '../../../components/process';
import { Persona, PersonaCard } from '../../../components/persona/persona';
import lauraPicture from './assets/laura.jpeg';
import ericPicture from './assets/eric.jpeg';
import Grid from '@mui/system/Unstable_Grid';

const TheOakGalleryHeroSection = styled(ProjectHeroWorkSection)(
    ({ theme }) => ({
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
    })
);

const TheOakGalleryDesignProcess = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        '& > .MuiGrid-root': {
            paddingLeft: 0,
            paddingRight: 0,
        },
    },
    [theme.breakpoints.up('md')]: {
        '& > .MuiGrid-root:first-of-type': {
            paddingLeft: 0,
        },
    },
}));

const PERSONAS: { laura: Persona; eric: Persona } = {
    laura: {
        picture: lauraPicture,
        name: 'Laura',
        age: 38,
        education: 'BBM',
        location: 'Raleigh, NC',
        family: 'Married',
        occupation: 'Marketing Director',
        quote: "Art is not just a passion; it's an essential part of my life.",
        goals: [
            'Discover new artworks and artists',
            'Expand her art collection',
            'Bid on art pieces that align with her taste',
            'Wants a user-friendly and efficient platform for art auctions that simplifies the process.',
        ],
        frustrations: [
            'Limited time for art auctions due to her busy work schedule',
            'Lack of a platform that respects and accommodates her limited availability',
            'Difficulty in navigating complex auction apps',
        ],
    },
    eric: {
        picture: ericPicture,
        name: 'Eric',
        age: 55,
        education: 'BE',
        location: 'Cary, NC',
        family: 'Divorced with two grown children',
        occupation: 'Retired Engineer',
        quote: 'Retirement is the perfect time to explore new passions.',
        goals: [
            'Explore the local art scene',
            'Start collecting art',
            'Invest in artworks that catch his eye',
            'Have guidance to make his art collecting journey enjoyable and accessible',
        ],
        frustrations: [
            'Complexity and lack of user-friendliness in current art auction apps',
            'Overwhelmed by the intricacies of the process',
            'Lack of guidance and support for new art collectors',
        ],
    },
};

export const PROJECT_ID = 'the-oak-gallery';

export default function TheOakGalleryPage() {
    return (
        <>
            <TheOakGalleryHeroSection
                projectId={PROJECT_ID}
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
                    This project is the outcome of my participation in the
                    Google UX Design Professional Certificate program—a
                    six-month online curriculum designed to provide individuals
                    with entry-level UX design skills. As part of the program, I
                    completed various assignments to build my portfolio, one of
                    which was designing a UX/UI case study for an app. I chose
                    to create an auction app for a potential local art gallery,
                    which I named The Oaks Gallery. This case study explores the
                    detailed design process involved in creating a flawless user
                    experience tailored for art enthusiasts. It combines
                    aesthetics with functionality to reshape the digital
                    auctioning landscape.
                </Paragraph>
                <Paragraph>
                    <Text weight="semi-bold">Project Duration: </Text>
                    <Text>October - December 2023.</Text>
                    <br />
                    <Text weight="semi-bold">My Role: </Text>
                    <Text>My Role: UX/UI Designer</Text>
                    <br />
                    <Text weight="semi-bold">My Responsibilities: </Text>
                    <Text>
                        Conducting interviews, paper and digital wire-framing,
                        low and high-fidelity prototyping, conducting usability
                        studies, accounting for accessibility, iterating on
                        designs and responsive design.
                    </Text>
                </Paragraph>

                <Paragraph>
                    <Text weight="semi-bold">The Problem: </Text>
                    <Text>
                        The members of the gallery lack convenient access to the
                        auctions organized by The Oaks Gallery.
                    </Text>
                </Paragraph>
                <Paragraph>
                    <Text weight="semi-bold">The Goal: </Text>
                    <Text>
                        Design a simple app, that can offer gallery’s members
                        more flexibility with auction attendance and to enrich
                        the relationship between the gallery and its members
                        while promoting a vibrant and interactive art community.
                    </Text>
                </Paragraph>
            </PageSection>
            <WorkSection
                id={'process'}
                heading={['DESIGN', 'PROCESS']}
                variant={['bold', 'normal']}
                withSubSections
            >
                <WorkSubsection
                    position="left"
                    color="yellow"
                    title="Empathize"
                >
                    <Text>
                        I conducted user interviews, which I then turned into
                        empathy maps to better understand the target user and
                        their needs. Art auction apps tend to be visually dense
                        with a wide array of artworks, artist profiles, auction
                        details, and bidding options. That’s why my primary
                        objective was to understand common challenges and
                        frustrations people face while navigating such a complex
                        app.
                    </Text>
                    <Subtitle>Pain Points</Subtitle>
                    <TheOakGalleryDesignProcess container spacing={4}>
                        <Grid xs={12} sm={4} md={4}>
                            <DesignProcess.Step
                                key={'Time & Convenience'}
                                icon={
                                    <Heading size="heading1" color="blue">
                                        1
                                    </Heading>
                                }
                                title={
                                    <Text weight="medium">
                                        Time & Convenience
                                    </Text>
                                }
                                actions={[
                                    'Busy art enthusiasts may struggle to set aside time for auctions and may find it difficult to travel to the auction venue.',
                                ]}
                                align={'left'}
                            />
                        </Grid>
                        <Grid xs={12} sm={4} md={4}>
                            <DesignProcess.Step
                                key={'complexity'}
                                icon={
                                    <Heading size="heading1" color="yellow">
                                        2
                                    </Heading>
                                }
                                title={<Text weight="medium">Complexity</Text>}
                                actions={[
                                    "People who love art but aren't familiar with auctions might feel lost or intimidated.",
                                ]}
                                align={'left'}
                            />
                        </Grid>
                        <Grid xs={12} sm={4} md={4}>
                            <DesignProcess.Step
                                key={'Accessibility'}
                                icon={
                                    <Heading size="heading1" color="red">
                                        3
                                    </Heading>
                                }
                                title={
                                    <Text weight="medium">Accessibility</Text>
                                }
                                actions={[
                                    'Auction apps’ designs are often busy, which results in confusing navigation.',
                                ]}
                                align={'left'}
                            />
                        </Grid>
                    </TheOakGalleryDesignProcess>
                </WorkSubsection>
                <WorkSubsection position="right" color="blue" title="Define">
                    <Text>
                        Analyzing the different insights and recurring themes
                        from users' responses allowed me to create two personas,
                        which represent that information in character form.
                    </Text>
                    <Stack spacing={3}>
                        <PersonaCard
                            key={PERSONAS.laura.name}
                            persona={PERSONAS.laura}
                        >
                            Laura, a dynamic marketing director living with her
                            spouse in Raleigh, NC, is deeply passionate about
                            art. Besides her role as a member of the local art
                            gallery, she's an avid traveler. Her wanderlust
                            takes her to art capitals around the world, where
                            she immerses herself in diverse cultures and
                            artistic traditions. Laura's globetrotting
                            experiences not only enrich her collection but also
                            infuse her marketing strategies with a global
                            perspective.
                        </PersonaCard>
                        <PersonaCard
                            key={PERSONAS.eric.name}
                            persona={PERSONAS.eric}
                        >
                            Eric, a divorced retired engineer with grown
                            children who have moved out, now resides in a
                            suburban neighborhood of Raleigh, NC. In his free
                            time, he's an avid birdwatcher, finding solace and
                            fascination in observing the local species in his
                            quite backyard. He's recently delved into the world
                            of art exploration and collection during his
                            retirement years, seeking enriching experiences.
                            Despite being tech-savvy, he's a novice in art
                            collection and auction apps.
                        </PersonaCard>
                    </Stack>
                </WorkSubsection>
                <WorkSubsection position="left" color="red" title="Ideate">
                    <Text>
                        To address the stated problems, I employed "How Might
                        We" questions, that initiate the process of generating
                        ideas and solutions.
                    </Text>
                </WorkSubsection>
            </WorkSection>
        </>
    );
}
