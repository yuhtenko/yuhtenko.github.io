import Stack from '@mui/system/Stack';
import { HalfCircle, Rectangle, Triangle } from '../../../components/shape';
import {
    HeroWorkSection,
    PageSection,
    ProjectHeroWorkSection,
    WorkSection,
} from '../../../components/sections';
import { Paragraph, Text } from '../../../components/typography';
import React from 'react';
import { styled } from '../../../components/theme';
import { WorkSubsection } from '../../../components/sections/work-subsection';

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
                </WorkSubsection>
                <WorkSubsection position="right" color="blue" title="Define">
                    <Text>
                        Analyzing the different insights and recurring themes
                        from users' responses allowed me to create two personas,
                        which represent that information in character form.
                    </Text>
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
