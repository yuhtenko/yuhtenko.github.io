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
import { Image, ImageList } from '../../../components/image';
import React from 'react';
import { styled } from '../../../components/theme';
import { WorkSubsection } from '../../../components/sections/work-subsection';
import { DesignProcess } from '../../../components/process';
import { Persona, PersonaCard } from '../../../components/persona/persona';
import lauraPicture from './assets/laura.jpeg';
import ericPicture from './assets/eric.jpeg';
import userFlowImage from './assets/user_flow.jpg';
import wire1Image from './assets/wire_1.jpg';
import wire2Image from './assets/wire_2.jpg';
import splashScreenImage from './assets/low_fidelity/splash_screen.jpg';
import loginPage1Image from './assets/low_fidelity/login_1.jpg';
import loginPage2Image from './assets/low_fidelity/login_2.jpg';
import homepageImage from './assets/low_fidelity/homepage_2.jpg';
import auctionPageImage from './assets/low_fidelity/auction_page.jpg';
import lotPage1Image from './assets/low_fidelity/lot_page_1.jpg';
import placingBid1Image from './assets/low_fidelity/placing_bid_1.jpg';
import placingBid2Image from './assets/low_fidelity/placing_bid_2.jpg';
import placingBid3Image from './assets/low_fidelity/placing_bid_3.jpg';
import hfSplashScreenImage from './assets/high_fidelity/splash_screen.jpg';
import hfOnboardingImage from './assets/high_fidelity/onboarding.jpg';
import hfLoginImage from './assets/high_fidelity/login.jpg';
import hfMenuBeforeImage from './assets/high_fidelity/menu_before.jpg';
import hfMenuAfter1Image from './assets/high_fidelity/menu_after_1.jpg';
import hfMenuAfter2Image from './assets/high_fidelity/menu_after_2.jpg';
import hfBidsBeforeImage from './assets/high_fidelity/bids_before.jpg';
import hfBidsAfterImage from './assets/high_fidelity/bids_after.jpg';
import hfLotPageBeforeImage from './assets/high_fidelity/lot_page_before.jpg';
import hfLotPageAfterImage from './assets/high_fidelity/lot_page_after.jpg';
import hfWelcomePageImage from './assets/high_fidelity/welcome_page.jpg';
import hfLotPageImage from './assets/high_fidelity/lot_page.jpg';
import hfPlacingBid1Image from './assets/high_fidelity/placing_bid_1.jpg';
import hfPlacingBid2Image from './assets/high_fidelity/placing_bid_2.jpg';
import hfHomepageImage from './assets/high_fidelity/home_page.jpg';
import hfAuctionPageImage from './assets/high_fidelity/auction_page.jpg';
import Grid from '@mui/system/Unstable_Grid';
import { List } from '../../../components/list/list';
import { SubSection } from '../../../components/sections/sub-section';

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
                <List
                    variant="none"
                    items={[
                        <>
                            <Text weight="semi-bold">Project Duration: </Text>
                            <Text>October - December 2023.</Text>
                        </>,
                        <>
                            <Text weight="semi-bold">My Role: </Text>
                            <Text>My Role: UX/UI Designer</Text>
                        </>,
                        <>
                            <Text weight="semi-bold">
                                My Responsibilities:{' '}
                            </Text>
                            <Text>
                                Conducting interviews, paper and digital
                                wire-framing, low and high-fidelity prototyping,
                                conducting usability studies, accounting for
                                accessibility, iterating on designs and
                                responsive design.
                            </Text>
                        </>,
                        <>
                            <Text weight="semi-bold">The Problem: </Text>
                            <Text>
                                The members of the gallery lack convenient
                                access to the auctions organized by The Oaks
                                Gallery.
                            </Text>
                        </>,
                        <>
                            <Text weight="semi-bold">The Goal: </Text>
                            <Text>
                                Design a simple app, that can offer gallery’s
                                members more flexibility with auction attendance
                                and to enrich the relationship between the
                                gallery and its members while promoting a
                                vibrant and interactive art community.
                            </Text>
                        </>,
                    ]}
                />
            </PageSection>
            <WorkSection
                id={'process'}
                heading={['DESIGN', 'PROCESS']}
                variant={['bold', 'normal']}
                withSubSections
                subSectionsSpacing={5}
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
                    <Grid container spacing={8}>
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
                    </Grid>
                </WorkSubsection>
                <WorkSubsection position="right" color="blue" title="Define">
                    <Paragraph>
                        Analyzing the different insights and recurring themes
                        from users' responses allowed me to create two personas,
                        which represent that information in character form.
                    </Paragraph>
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
                    <Stack>
                        <Paragraph>
                            After that I created a user journey map of my
                            persona’s experience to help identify possible
                            problems and improvement opportunities. Following
                            all the frustrations I defined{' '}
                            <Text weight="semi-bold">2 problem statements</Text>
                            .
                        </Paragraph>
                        <List
                            gap={2}
                            items={[
                                'A busy marketing director, art enthusiast and collector, Laura, needs a user-friendly and efficient platform to access local art gallery auctions, because she wants to expand her art collection while accommodating her tight schedule.',
                                'A retired engineer and aspiring art collector, Eric, needs guidance and support on how to navigate art auctions effectively, because he wants to initiate his art collection and participate in auctions with confidence.',
                            ]}
                        />
                    </Stack>
                </WorkSubsection>
                <WorkSubsection position="left" color="red" title="Ideate">
                    <Stack>
                        <Text>
                            To address the stated problems, I employed "How
                            Might We" questions, that initiate the process of
                            generating ideas and solutions.
                        </Text>
                        <List
                            items={[
                                <Text>
                                    <Text weight="medium">HMW</Text> simplify
                                    the process of art auction dynamics for
                                    users to feel confident in navigating
                                    auctions?
                                </Text>,
                                <Text>
                                    <Text weight="medium">HMW</Text> provide
                                    users with educational resources and
                                    guidance tailored to their level of
                                    expertise as they begin their art collection
                                    journey?
                                </Text>,
                                <Text>
                                    <Text weight="medium">HMW</Text> design a
                                    user-friendly digital platform that
                                    streamlines access to local art gallery
                                    auctions for users’ convenience?
                                </Text>,
                                <Text>
                                    <Text weight="medium">HMW</Text> enhance the
                                    platform with features such as curated
                                    recommendations and artist insights to
                                    assist users in making informed decisions
                                    and expanding their art collection
                                    efficiently?
                                </Text>,
                            ]}
                        />
                        <Paragraph>
                            The next thing I did was outline the basic flow of
                            the app, mapping out each step users would take as
                            they go through the process. Difficulty with auction
                            app’s navigation was a primary pain point for users,
                            so I used that knowledge to create a sitemap. My
                            goal here was to make strategic information
                            architecture decisions that would improve overall
                            app navigation. The structure I chose was designed
                            to make things simple and easy.
                        </Paragraph>
                    </Stack>

                    <Image src={userFlowImage} />
                </WorkSubsection>
                <WorkSubsection
                    position="right"
                    color="yellow"
                    title="Prototype"
                >
                    <Paragraph>
                        The aim of prototyping stage was to turn my ideas into
                        something tangible which can be tested on real users.
                    </Paragraph>

                    <Stack>
                        <Subtitle spacing={[1, 1]}>Wireframing</Subtitle>
                        <Paragraph>
                            I began sketching out potential solutions, keeping
                            the user pain points about navigation, browsing, and
                            checkout flow in mind.
                        </Paragraph>
                    </Stack>

                    <SubSection heading="Paper sketches">
                        <ImageList>
                            <Image src={wire1Image} />
                            <Image src={wire2Image} />
                        </ImageList>
                    </SubSection>
                    <SubSection heading={'Low Fidelity wireframes'}>
                        <Paragraph>
                            Switching from paper to digital wireframes helped me
                            better see how the design could fix problems users
                            have and make their experience better. A big part of
                            my plan was deciding where to put important buttons
                            and visuals on the main page.
                        </Paragraph>
                        <ImageList>
                            <Image
                                src={splashScreenImage}
                                alt="Splash screen"
                                withBorder
                            />
                            <Image
                                src={loginPage1Image}
                                alt="Login page 1"
                                withBorder
                            />
                            <Image
                                src={loginPage2Image}
                                alt="Login page 2"
                                withBorder
                            />
                            <Image
                                src={homepageImage}
                                alt="Homepage"
                                withBorder
                            />
                            <Image
                                src={auctionPageImage}
                                alt="Auction page"
                                withBorder
                            />
                            <Image
                                src={lotPage1Image}
                                alt="Lot page"
                                withBorder
                            />
                            <Image
                                src={placingBid1Image}
                                alt="Placing bid 1"
                                withBorder
                            />
                            <Image
                                src={placingBid2Image}
                                alt="Placing bid 2"
                                withBorder
                            />
                            <Image
                                src={placingBid3Image}
                                alt="Placing bid 3"
                                withBorder
                            />
                        </ImageList>
                    </SubSection>
                    <SubSection heading="High Fidelity wireframes">
                        <Paragraph>
                            <ImageList>
                                <Image
                                    src={hfSplashScreenImage}
                                    alt="High Fidelity Splash Screen"
                                    withBorder
                                />
                                <Image
                                    src={hfOnboardingImage}
                                    alt="High Fidelity Onboarding"
                                    withBorder
                                />
                                <Image
                                    src={hfLoginImage}
                                    alt="High Fidelity Login"
                                    withBorder
                                />
                                <Image
                                    src={hfWelcomePageImage}
                                    alt="High Fidelity Welcome Page"
                                    withBorder
                                />
                                <Image
                                    src={hfLotPageImage}
                                    alt="High Fidelity Lot Page"
                                    withBorder
                                />
                                <Image
                                    src={hfPlacingBid1Image}
                                    alt="High Fidelity Placing Bid 1"
                                    withBorder
                                />
                                <Image
                                    src={hfPlacingBid2Image}
                                    alt="High Fidelity Placing Bid 2"
                                    withBorder
                                />
                                <Image
                                    src={hfHomepageImage}
                                    alt="High Fidelity Homepage"
                                    withBorder
                                />
                                <Image
                                    src={hfAuctionPageImage}
                                    alt="High Fidelity Auction Page"
                                    withBorder
                                />
                                <Image
                                    src={hfBidsBeforeImage}
                                    alt="High Fidelity Bids Page"
                                    withBorder
                                />
                            </ImageList>
                        </Paragraph>
                    </SubSection>
                </WorkSubsection>
                <WorkSubsection position="left" color="red" title="Test">
                    <Paragraph>
                        I conducted user testing by sharing my clickable
                        prototype with a group of potential users and asking for
                        their feedback. The valuable insights I received
                        prompted me to revisit and refine the design based on
                        their input.
                    </Paragraph>
                    <SubSection heading="User-Driven Insights">
                        <List
                            items={[
                                <>
                                    <Paragraph>
                                        I highlighted the section of the app
                                        where the user is currently located.
                                    </Paragraph>
                                    <Stack
                                        direction={'row'}
                                        alignItems={'flex-start'}
                                        justifyContent={'space-around'}
                                        marginTop={3}
                                        marginBottom={3}
                                    >
                                        <Stack
                                            direction={'column'}
                                            gap={2}
                                            alignItems={'center'}
                                        >
                                            <Text>Before</Text>
                                            <Image
                                                src={hfMenuBeforeImage}
                                                alt="Menu Before"
                                                withBorder
                                            />
                                        </Stack>
                                        <Stack
                                            direction={'column'}
                                            gap={2}
                                            alignItems={'center'}
                                        >
                                            <Text>After</Text>
                                            <Image
                                                src={hfMenuAfter1Image}
                                                alt="Menu After 1"
                                                withBorder
                                            />
                                            <Image
                                                src={hfMenuAfter2Image}
                                                alt="Menu After 2"
                                                withBorder
                                            />
                                        </Stack>
                                    </Stack>
                                </>,
                                <>
                                    <Paragraph>
                                        I implemented a new color scheme to
                                        indicate different statuses: users can
                                        now easily recognize their own bids and
                                        when their bids have been outbid.
                                    </Paragraph>
                                    <Stack
                                        direction={'row'}
                                        alignItems={'flex-start'}
                                        justifyContent={'space-around'}
                                        marginTop={3}
                                        marginBottom={3}
                                        gap={3}
                                    >
                                        <Stack
                                            direction={'column'}
                                            gap={2}
                                            alignItems={'center'}
                                        >
                                            <Text>Before</Text>
                                            <Image
                                                src={hfBidsBeforeImage}
                                                alt="Bids Before"
                                                withBorder
                                            />
                                        </Stack>
                                        <Stack
                                            direction={'column'}
                                            gap={2}
                                            alignItems={'center'}
                                        >
                                            <Text>After</Text>
                                            <Image
                                                src={hfBidsAfterImage}
                                                alt="Bid After"
                                                withBorder
                                            />
                                        </Stack>
                                    </Stack>
                                </>,
                                <>
                                    <Paragraph>
                                        I added the Help button under every lot
                                        in case users get questions.
                                    </Paragraph>
                                    <Stack
                                        direction={'row'}
                                        alignItems={'flex-start'}
                                        justifyContent={'space-around'}
                                        marginTop={3}
                                        marginBottom={3}
                                        gap={3}
                                    >
                                        <Stack
                                            direction={'column'}
                                            gap={2}
                                            alignItems={'center'}
                                        >
                                            <Text>Before</Text>
                                            <Image
                                                src={hfLotPageBeforeImage}
                                                alt="Lot Page Before"
                                                withBorder
                                            />
                                        </Stack>
                                        <Stack
                                            direction={'column'}
                                            gap={2}
                                            alignItems={'center'}
                                        >
                                            <Text>After</Text>
                                            <Image
                                                src={hfLotPageAfterImage}
                                                alt="Lot Page After"
                                                withBorder
                                            />
                                        </Stack>
                                    </Stack>
                                </>,
                            ]}
                        />
                    </SubSection>
                    <SubSection heading="Next Steps">
                        <Paragraph>
                            In the future, I aim to continue testing to validate
                            the effectiveness of the solutions implemented for
                            user pain points. Additionally, I plan to conduct
                            further user research to identify and address
                            additional areas requiring updates.
                        </Paragraph>
                    </SubSection>
                </WorkSubsection>
            </WorkSection>
        </>
    );
}
