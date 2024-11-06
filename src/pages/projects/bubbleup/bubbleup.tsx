import {
    PageSection,
    ProjectHeroWorkSection,
    WorkSection,
} from '../../../components/sections';
import Stack from '@mui/system/Stack';
import { HalfCircle, Rectangle, Triangle } from '../../../components/shape';
import React from 'react';
import { Paragraph, Subtitle, Text } from '../../../components/typography';
import { StyledLink } from '../../../components/link';
import { List } from '../../../components/list/list';
import { WorkSubsection } from '../../../components/sections/work-subsection';
import { VerticalTable, XYTable } from '../../../components/table';
import { Tile } from '../../../components/tile';
import { styled, Theme, toColor } from '../../../components/theme';
import Grid from '@mui/system/Unstable_Grid';
import { CompactPersonaCard, Persona } from '../../../components/persona';
import emmaPicture from './assets/emma.png';
import tylerPicture from './assets/tyler.png';
import raviPicture from './assets/ravi.png';
import userJourneyPicture from './assets/user-journey.jpg';
import sitemapPicture from './assets/sitemap.jpg';
import { SubSection } from '../../../components/sections/sub-section';
import { TestResult } from '../../../components/sections/test-result';
import { ImageView } from '../../../components/image/image-view';
import lfImage1 from './assets/low-fidelity-1.jpg';
import lfImage2 from './assets/low-fidelity-2.jpg';
import lfImage3 from './assets/low-fidelity-3.jpg';
import lfImage4 from './assets/low-fidelity-4.jpg';
import lfImage5 from './assets/low-fidelity-5.jpg';
import lfImage6 from './assets/low-fidelity-6.jpg';
import lfImage7 from './assets/low-fidelity-7.jpg';
import lfImage8 from './assets/low-fidelity-8.jpg';
import lfImage9 from './assets/low-fidelity-9.jpg';
import lfImage10 from './assets/low-fidelity-10.jpg';
import lfImage11 from './assets/low-fidelity-11.jpg';
import lfImage12 from './assets/low-fidelity-12.jpg';
import hfImage1 from './assets/high-fidelity-1.jpg';
import hfImage2 from './assets/high-fidelity-2.jpg';
import hfImage3 from './assets/high-fidelity-3.jpg';
import hfImage4 from './assets/high-fidelity-4.jpg';
import hfImage5 from './assets/high-fidelity-5.jpg';
import hfImage6 from './assets/high-fidelity-6.jpg';
import hfImage7 from './assets/high-fidelity-7.jpg';
import hfImage8 from './assets/high-fidelity-8.jpg';
import hfImage9 from './assets/high-fidelity-9.jpg';
import hfImage10 from './assets/high-fidelity-10.jpg';
import hfImage11 from './assets/high-fidelity-11.jpg';
import logoCreationImage from './assets/logo-creation.jpg';
import test1Before1Image from './assets/test-1-before-1.jpg';
import test1Before2Image from './assets/test-1-before-2.jpg';
import test1After1Image from './assets/test-1-after-1.jpg';
import test1After2Image from './assets/test-1-after-2.jpg';
import test2After1Image from './assets/test-2-1.jpg';
import test2After2Image from './assets/test-2-2.jpg';
import test2After3Image from './assets/test-2-3.jpg';
import test2After4Image from './assets/test-2-4.jpg';
import test2After5Image from './assets/test-2-5.jpg';
import { ColumnarImageList } from '../../../components/image/columnar-image-list';
import { PersonaPictureProps } from '../../../components/persona/persona-picture';

export const PROJECT_ID = 'bubbleup';

const PERSONAS: { emma: Persona; tyler: Persona; ravi: Persona } = {
    emma: {
        picture: emmaPicture,
        name: 'Emma',
        age: 21,
        education: 'BS',
        location: 'Chapel Hill, NC',
        occupation: 'Student',
        quote: "My day's a balancing act—anything that saves me time is a win.",
    },
    tyler: {
        picture: tylerPicture,
        name: 'Tyler',
        age: 25,
        education: 'BBA',
        location: 'Chapel Hill, NC',
        occupation: 'Marketing Coordinator',
        quote: "I'm always juggling work and fun—I need things that keep up with my pace.",
    },
    ravi: {
        name: 'Ravi',
        picture: raviPicture,
        age: 32,
        education: 'MS',
        location: 'Chapel Hill, NC',
        occupation: 'Software Engineer',
        quote: "I'm here to experience everything this place has to offer, one new flavor at a time.",
    },
};

const BubbleupHeroSection = styled(ProjectHeroWorkSection)(({ theme }) => ({
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

export default function BubbleupProjectPage() {
    return (
        <>
            <BubbleupHeroSection
                projectId={PROJECT_ID}
                shapes={
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        spacing={6}
                        maxWidth={425}
                        maxHeight={128}
                        height={'100%'}
                        width="100%"
                        margin={0}
                    >
                        <Stack direction={'row'} alignItems={'flex-end'}>
                            <Triangle color="yellow" direction="up" />
                        </Stack>
                        <Stack direction={'row'}>
                            <Rectangle color="red" direction="up" />
                        </Stack>
                        <Stack direction={'row'} alignItems={'flex-end'}>
                            <HalfCircle color="black" direction="up" />
                        </Stack>
                    </Stack>
                }
            />
            <PageSection id={'about'} heading={'About'} variant={'outline'}>
                <Paragraph>
                    This project is a capstone project from the UI/UX Design{' '}
                    <StyledLink
                        to={
                            'https://www.coursera.org/account/accomplishments/specialization/LWPR2WFMLPYM'
                        }
                    >
                        Specialization
                    </StyledLink>{' '}
                    by California Institute of the Arts (CalArts). It revolves
                    around designing an intuitive and user-friendly digital
                    experience for BubbleUp, a boba tea restaurant. The project
                    focuses on creating a seamless online ordering platform for
                    users to customize and order their favorite drinks,
                    emphasizing user convenience, customization, and efficient
                    delivery.
                </Paragraph>
                <br />
                <List
                    variant="none"
                    items={[
                        <>
                            <Text weight="semi-bold">Project Duration: </Text>
                            <Text>July - September 2024</Text>
                        </>,
                        <>
                            <Text weight="semi-bold">My Role: </Text>
                            <Text>UI/UX Designer & Product Designer</Text>
                        </>,
                        <>
                            <Text weight="semi-bold">
                                My Responsibilities:{' '}
                            </Text>
                            <Text>
                                Conducting user research, developing personas,
                                and defining the app’s information architecture,
                                paper and digital wire-framing, low and
                                high-fidelity prototyping. I designed the logo,
                                user interface and interactive elements,
                                including the drink customization system and
                                order tracking feature, while ensuring a
                                mobile-optimized experience.
                            </Text>
                        </>,
                    ]}
                />
            </PageSection>
            <WorkSection
                id={'concept'}
                heading={['', '']}
                variant={['bold', 'normal']}
                withSubSections
                subSectionsSpacing={6}
            >
                <WorkSubsection
                    position="left"
                    color="red"
                    title="Restaurant concept"
                >
                    <Paragraph>
                        BubbleUp is a modern, on-the-go boba tea shop that
                        focuses on delivering fully customizable drinks tailored
                        to individual tastes. The concept revolves around
                        providing a fast, convenient, and fun experience, where
                        customers can mix and match tea bases, flavors, and
                        toppings, creating unique combinations that fit their
                        preferences, all while emphasizing quick delivery to
                        college students and busy professionals.
                    </Paragraph>

                    <Stack>
                        <Subtitle spacing={[1, 1]}>Elevator pitch</Subtitle>
                        <Paragraph fontStyle="italic">
                            “Say hey to BubbleUp, the ultimate boba hookup that
                            delivers your fave bubble tea straight to your door.
                            No lines, no wait—just pure boba vibes. Customize
                            your perfect drink on our easy-peasy online platform
                            with all the flavors, toppings, and sweetness levels
                            you crave. From classic milk teas to wild new
                            combos, we’ve got you covered. So why settle when
                            you can level up your boba game? Sip back, relax,
                            and let BubbleUp bring the bubbles to you—fresh,
                            fast, and just how you like it.”
                        </Paragraph>
                    </Stack>

                    <Stack>
                        <Subtitle spacing={[1, 1]}>
                            Customization options
                        </Subtitle>
                        <VerticalTable
                            items={[
                                [
                                    'Tea',
                                    [
                                        'Black',
                                        'Green',
                                        'Herbal',
                                        'Oolong',
                                        'Thai',
                                        'Chai',
                                        'Jasmine',
                                        'Matcha',
                                    ],
                                ],
                                [
                                    'Flavor',
                                    [
                                        'Milk',
                                        'Honey',
                                        'Taro',
                                        'Brown sugar',
                                        'Honeydew',
                                        'Lychee',
                                        'Mango',
                                        'Passion fruit',
                                        'Coconut',
                                        'Strawberry',
                                        'Almond',
                                    ],
                                ],
                                [
                                    'Topping',
                                    [
                                        'Classic Tapioca pearls',
                                        'Popping boba (lychee, mango, strawberry)',
                                        'Jelly cubes (coconut, aloe vera, coffee jelly)',
                                        'Pudding (creamy egg, mango)',
                                        'Red bean',
                                        'Cheese foam',
                                        'Whipped cream',
                                    ],
                                ],
                                [
                                    'Sweetness level',
                                    ['100%', '75%', '50%', '25%', '0%'],
                                ],
                            ]}
                        />
                    </Stack>
                </WorkSubsection>
                <WorkSubsection title="Strategy" color="blue" position="right">
                    <Grid container spacing={3} direction={'row'}>
                        <Grid xs={12}>
                            <Subtitle spacing={[1, 1]}>
                                Target audience
                            </Subtitle>
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <Tile color="blue" title="Role" fullHeight>
                                <List
                                    color={'secondary'}
                                    items={[
                                        'College students',
                                        'Young professionals',
                                        'Bubble tea enthusiasts',
                                        'Those who have never tried Boba before',
                                    ]}
                                />
                            </Tile>
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <Tile color="red" title="Demographics" fullHeight>
                                <List
                                    color={'secondary'}
                                    items={[
                                        'Gender - Any',
                                        'Education - College or higher',
                                        'Occupations - College students, office managers/secretaries, administrators, nearby business owners',
                                        'Age - 16-40',
                                        'Location - Chapel Hill, NC (UNC Campus)',
                                    ]}
                                />
                            </Tile>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Tile
                                color="yellow"
                                title="Psychographics"
                                fullHeight
                            >
                                <List
                                    color={'secondary'}
                                    items={[
                                        'Personality & Attitudes - Open-minded, Sassy',
                                        'Trendy Values - Liberal',
                                        'Lifestyles: On-the-go, Social',
                                        'Spontaneous, Academic',
                                    ]}
                                />
                            </Tile>
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Tile color="primary" title="Behavioral" fullHeight>
                                <List
                                    color={'secondary'}
                                    items={[
                                        'Usage Frequency - Frequent (students, office workers), Occasional (social users, boba lovers)',
                                        'Purchasing Behavior - Customization enthusiasts, Convenience seekers',
                                        'Decision-Making - On-the-go deciders',
                                        'Flavor explorers Brand Loyalty - Loyalty-driven repeaters, Social sharers',
                                    ]}
                                />
                            </Tile>
                        </Grid>
                    </Grid>
                    <br />
                    <Grid container spacing={3} direction={'row'}>
                        <Grid xs={12} sm={6}>
                            <Subtitle spacing={[1, 1]} color={'blue'}>
                                User Needs
                            </Subtitle>
                            <Paragraph>
                                The website needs to enable the user to:
                            </Paragraph>
                            <List
                                items={[
                                    'Find out if the restaurant delivers to their area',
                                    'Seamless online ordering',
                                    'Real business hours',
                                    'Customize the order or pick from a list of most popular drinks',
                                    'Place an order',
                                    'Track order status',
                                    'Optimized mobile experience',
                                    'See order history',
                                    'Promotions and rewards integration',
                                ]}
                            />
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <Subtitle spacing={[1, 1]} color={'blue'}>
                                Client Needs
                            </Subtitle>
                            <Paragraph>
                                The website needs to enable the client to:
                            </Paragraph>
                            <List
                                items={[
                                    'Sell boba tea online that will be delivered',
                                    'Provide a system for order customization',
                                    'Fast and reliable delivery',
                                    'Promote quality and natural ingredients',
                                    'Educate new customers about Boba',
                                    'Showcase popular drinks',
                                    'Ensure secure payment and data protection',
                                    'Provide a system for order tracking',
                                ]}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Subtitle spacing={[1, 1]} color={'blue'}>
                                Content Requirements
                            </Subtitle>
                            <List
                                items={[
                                    'Menu descriptions and customization guides',
                                    'High-quality drink images and visuals',
                                    'Info about delivery radius and working hours',
                                    'Educational content for new users',
                                    'Promotional and loyalty program info',
                                ]}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Subtitle spacing={[1, 1]} color={'blue'}>
                                Functionality Requirements
                            </Subtitle>
                            <List
                                items={[
                                    'Location checker tool',
                                    'Interactive drink customization system',
                                    'Online ordering and check out system',
                                    'Order tracking and real time updates',
                                    'Mobile optimization',
                                ]}
                            />
                        </Grid>
                    </Grid>
                </WorkSubsection>
            </WorkSection>
            <WorkSection
                id={'design'}
                heading={['DESIGN', 'PROCESS']}
                variant={['bold', 'normal']}
            >
                <WorkSubsection
                    title={'Empathize'}
                    color="yellow"
                    position="left"
                >
                    <Paragraph>
                        In the Empathize stage of the BubbleUp project, I
                        focused on deeply understanding the target users and
                        their needs by conducting user research. This included
                        identifying key user groups such as college students,
                        office workers, and boba lovers, as outlined in the
                        provided user personas below. I created empathy maps to
                        better visualize the emotions, frustrations, and
                        motivations of users like Emma, Tyler, and Ravi, all of
                        whom have different lifestyles but share a common need
                        for a convenient, customizable boba tea ordering
                        experience.
                    </Paragraph>
                    <XYTable
                        xColor="blue"
                        yColor={'red'}
                        items={[
                            [
                                'Says',
                                [
                                    [
                                        'Busy Students',
                                        [
                                            'My day’s a balancing act, anything that saves me time is a win.',
                                            'I need something fast and easy, especially during late-night study sessions.',
                                        ],
                                    ],
                                    [
                                        'On-the-Go Professionals',
                                        [
                                            'I’m always juggling work and fun—I need things that keep up with my pace.',
                                            'I don’t want to waste time waiting in line for drinks during my breaks.',
                                        ],
                                    ],
                                    [
                                        'First-Time Users',
                                        [
                                            'I love discovering new flavors and unique combinations in my food.',
                                            'I enjoy the experience of trying something different each time I order.',
                                        ],
                                    ],
                                ],
                            ],
                            [
                                'Thinks',
                                [
                                    [
                                        'Busy Students',
                                        [
                                            'I have too much to do and too little time.',
                                            'I need a quick, convenient option that fits my tight schedule.',
                                            'Customizing my drink is great, but it shouldn’t take too long.',
                                        ],
                                    ],
                                    [
                                        'On-the-Go Professionals',
                                        [
                                            'I need quick, on-the-go options to fit between work meetings.',
                                            'I want my drinks to be ready when I am, and customization should be fast.',
                                            'Is there something new or fun I can try while being efficient with my time?',
                                        ],
                                    ],
                                    [
                                        'First-Time Users',
                                        [
                                            'I want to explore this area’s unique food scene and try what’s popular here.',
                                            'Customization options should help me create something new, not overwhelm me.',
                                            'I hope the app introduces me to things I haven’t tasted before.',
                                        ],
                                    ],
                                ],
                            ],
                            [
                                'Feels',
                                [
                                    [
                                        'Busy Students',
                                        [
                                            'Overwhelmed by her busy schedule and academic workload.',
                                            'Grateful for quick, reliable delivery options.',
                                            'Relieved when something is easy and convenient to use.',
                                        ],
                                    ],
                                    [
                                        'On-the-Go Professionals',
                                        [
                                            'Frustrated when things slow him down, especially at work.',
                                            'Excited about discovering new drinks and customization options.',
                                            'Appreciative of services that match his fast-paced lifestyle.',
                                        ],
                                    ],
                                    [
                                        'First-Time Users',
                                        [
                                            'Excited by the opportunity to explore a variety of flavors.',
                                            'Adventurous when trying new food.',
                                            'Appreciates detailed descriptions and recommendations that make him feel confident in his choices.',
                                        ],
                                    ],
                                ],
                            ],
                            [
                                'Does',
                                [
                                    [
                                        'Busy Students',
                                        [
                                            'Frequently orders food and drinks online, especially at night.',
                                            'Prefers apps that save her time and allow easy customizations.',
                                            'Looks for delivery options that fit into her study routine without much hassle.',
                                        ],
                                    ],
                                    [
                                        'On-the-Go Professionals',
                                        [
                                            'Uses delivery services to grab drinks between meetings or before social events.',
                                            'Often tries new customization options but only when it’s quick and easy.',
                                            'Looks for platforms that are intuitive and allow for fast navigation.',
                                        ],
                                    ],
                                    [
                                        'First-Time Users',
                                        [
                                            'Regularly orders delivery with co-workers, making it a fun, shared experience.',
                                            'Actively experiments with customizations, new menu items and recommendations to expand his culinary experiences.',
                                        ],
                                    ],
                                ],
                            ],
                        ]}
                    />
                    <br />
                    <Stack>
                        <Subtitle spacing={[1, 1]}>Pain Points</Subtitle>
                        <List
                            variant="ordered"
                            sx={(theme: Theme) => ({
                                '& li:first-of-type::marker': {
                                    color: toColor(theme, 'blue'),
                                },
                                '& li:nth-of-type(2)::marker': {
                                    color: toColor(theme, 'yellow'),
                                },
                            })}
                            items={[
                                <>
                                    <Text color="blue">Time Sensitivity</Text>
                                    <Paragraph>
                                        Users like Emma and Tyler need quick and
                                        convenient options that fit their busy
                                        schedules. They get frustrated by any
                                        delays in the ordering process, such as
                                        waiting in line or slow navigation
                                        through the app.
                                    </Paragraph>
                                </>,
                                <>
                                    <Text color="yellow">
                                        Overwhelming Customization
                                    </Text>
                                    <Paragraph>
                                        While users enjoy the ability to
                                        customize their drinks, too many options
                                        without clear guidance can become
                                        overwhelming, especially for those
                                        seeking something quick and easy, like
                                        Ravi.
                                    </Paragraph>
                                </>,
                            ]}
                        />
                    </Stack>
                </WorkSubsection>
                <WorkSubsection title="Define" color="blue" position="right">
                    <Paragraph>
                        I created user personas to represent the target audience
                        for the BubbleUp project. These personas capture the
                        unique needs, behaviors, and goals of users to ensure
                        the design addresses real user challenges and delivers
                        an intuitive, enjoyable experience.
                    </Paragraph>
                    <Stack spacing={3}>
                        <CompactPersonaCard
                            key={PERSONAS.emma.name}
                            persona={PERSONAS.emma}
                        >
                            A dedicated student at UNC Chapel Hill majoring in
                            Biology, Emma has a full schedule of labs, study
                            sessions, and volunteer work. Disciplined,
                            determined, always chasing the next academic
                            milestone. Often too busy to cook, Emma relies on
                            quick delivery options to keep her fueled during her
                            study marathons. Prefers to customize her order to
                            fit her exact tastes.
                        </CompactPersonaCard>
                        <CompactPersonaCard
                            key={PERSONAS.tyler.name}
                            persona={PERSONAS.tyler}
                            imagePosition="right"
                        >
                            Recently graduated and now balancing his first
                            full-time job while maintaining an active social
                            life. Outgoing, energetic, and loves to network both
                            at work and outside. Tyler spends his weekdays
                            working hard and his weekends catching up with
                            friends. Always on the lookout for new spots to grab
                            a quick, fun drink between meetings or before
                            heading out.
                        </CompactPersonaCard>
                        <CompactPersonaCard
                            key={PERSONAS.ravi.name}
                            persona={PERSONAS.ravi}
                        >
                            Originally from Mumbai, Ravi loves trying new
                            things, especially foods he’s never had before.
                            Open-minded, adventurous, and enjoys learning about
                            new cultures through their cuisines. Ravi and his
                            coworkers often order in while working on late
                            projects. He’s excited about discovering local
                            favorites and likes to explore new tastes whenever
                            possible.
                        </CompactPersonaCard>
                    </Stack>
                    <Paragraph>
                        After that I created a user journey map of my personas’
                        experience to help identify possible problems and
                        improvement opportunities.
                    </Paragraph>
                    <ImageView src={userJourneyPicture} alt={'User Journey'} />
                    <Paragraph>
                        Following all the frustrations I defined one main
                        problem statement.
                    </Paragraph>
                    <Paragraph>
                        <Text weight="medium">
                            Customization experience for busy users
                        </Text>
                        <br />
                        Emma, a busy student at UNC, needs an intuitive and
                        reliable way to customize her boba tea orders through a
                        mobile app. However, current solutions lack a
                        streamlined, easy-to-use customization interface,
                        leading to incorrect orders and frustration, especially
                        when she is short on time during study sessions.
                    </Paragraph>
                </WorkSubsection>
                <WorkSubsection title="Ideate" color="red" position="left">
                    <Paragraph>
                        In the Ideate stage, I can use{' '}
                        <Text weight="medium">How Might We (HMW)</Text>
                        questions to open up creative thinking and
                        problem-solving for the issues identified in my problem
                        statements. These questions help brainstorm potential
                        solutions in a broad and imaginative way.
                    </Paragraph>
                    <List
                        items={[
                            'How might we streamline the customization process to save time for busy users like Emma?',
                            'How might we create an interface that minimizes errors and ensures accurate orders, even during rushed moments?',
                            'How might we offer a one-click customization option for frequent orders to make the process faster?',
                            'How might we reduce decision fatigue for users by simplifying the number of steps required to customize their drink?',
                            'How might we provide smart recommendations or pre-set options that Emma can easily select to fit her tastes?',
                            'How might we speed up the ordering and delivery process during peak hours for users like Tyler and Ravi?',
                            'How might we offer special menu items or flavor combinations that keep Tyler and Ravi’s experience fresh and exciting?',
                            'How might we improve delivery tracking to keep socially active users informed and engaged while they wait?',
                        ]}
                    />
                    <Paragraph>
                        The next step I took was outlining the basic flow of the
                        BubbleUp app by creating a detailed sitemap, mapping out
                        each step users would take throughout the ordering
                        process. Since navigating customization options was a
                        significant pain point, I used that knowledge to design
                        the sitemap. My goal was to ensure a logical,
                        easy-to-follow structure that would enhance the overall
                        user experience and make navigation simple and intuitive
                        for busy and socially active users alike.
                    </Paragraph>
                    <ImageView src={sitemapPicture} alt={'Sitemap'} />
                </WorkSubsection>
                <WorkSubsection
                    title="Prototype"
                    color="yellow"
                    position="right"
                >
                    <Stack>
                        <Subtitle spacing={[1, 1]}>Wireframing</Subtitle>
                        <Paragraph>
                            After gathering research and insights, I moved into
                            the wire-framing and prototyping stage. I began by
                            creating initial paper sketches to outline the app's
                            structure, followed by low-fidelity prototypes to
                            establish the basic layout and flow.
                        </Paragraph>
                    </Stack>

                    <SubSection heading="Low Fidelity Wireframes">
                        <ColumnarImageList
                            images={[
                                [
                                    <ImageView
                                        src={lfImage1}
                                        alt={'Low Fidelity 1'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage5}
                                        alt={'Low Fidelity 5'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage9}
                                        alt={'Low Fidelity 9'}
                                        withBorder
                                    />,
                                ],
                                [
                                    <ImageView
                                        src={lfImage2}
                                        alt={'Low Fidelity 2'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage6}
                                        alt={'Low Fidelity 6'}
                                        withBorder
                                    />,
                                ],
                                [
                                    <ImageView
                                        src={lfImage3}
                                        alt={'Low Fidelity 3'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage7}
                                        alt={'Low Fidelity 7'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage10}
                                        alt={'Low Fidelity 10'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage12}
                                        alt={'Low Fidelity 12'}
                                        withBorder
                                    />,
                                ],
                                [
                                    <ImageView
                                        src={lfImage4}
                                        alt={'Low Fidelity 4'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage8}
                                        alt={'Low Fidelity 8'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage11}
                                        alt={'Low Fidelity 11'}
                                        withBorder
                                    />,
                                ],
                            ]}
                        />
                    </SubSection>
                    <SubSection heading="Logo creation">
                        <ImageView
                            src={logoCreationImage}
                            alt={'Logo Creation'}
                        />
                    </SubSection>
                    <Paragraph>
                        From there, I developed high-fidelity prototypes that
                        incorporated detailed design elements, including
                        typography, color palettes, and interactions. During
                        this stage, I also focused on creating a logo that
                        aligned with the app's brand identity and user
                        experience.
                    </Paragraph>
                    <SubSection heading="High Fidelity Wireframes">
                        <ColumnarImageList
                            images={[
                                [
                                    <ImageView
                                        src={hfImage1}
                                        alt={'High Fidelity 1'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={hfImage5}
                                        alt={'High Fidelity 5'}
                                        withBorder
                                    />,

                                    <ImageView
                                        src={hfImage9}
                                        alt={'High Fidelity 9'}
                                        withBorder
                                    />,
                                ],
                                [
                                    <ImageView
                                        src={hfImage2}
                                        alt={'High Fidelity 2'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={hfImage6}
                                        alt={'High Fidelity 6'}
                                        withBorder
                                    />,
                                ],
                                [
                                    <ImageView
                                        src={hfImage3}
                                        alt={'High Fidelity 3'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={hfImage7}
                                        alt={'High Fidelity 7'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={hfImage10}
                                        alt={'High Fidelity 10'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={lfImage12}
                                        alt={'Low Fidelity 12'}
                                        withBorder
                                    />,
                                ],
                                [
                                    <ImageView
                                        src={hfImage4}
                                        alt={'High Fidelity 4'}
                                        withBorder
                                    />,
                                    <ImageView
                                        src={hfImage8}
                                        alt={'High Fidelity 8'}
                                        withBorder
                                    />,

                                    <ImageView
                                        src={hfImage11}
                                        alt={'High Fidelity 11'}
                                        withBorder
                                    />,
                                ],
                            ]}
                        />
                    </SubSection>
                </WorkSubsection>
                <WorkSubsection title="Test" color="red" position="left">
                    <Paragraph>
                        In the test stage, I conducted user testing by sharing
                        the clickable prototype with potential users to gather
                        feedback on the design and functionality. Their input
                        provided valuable insights into how the app could be
                        improved, leading to further refinements. This process
                        helped ensure the final design aligned with user
                        expectations and needs.
                    </Paragraph>
                    <SubSection heading="User-Driven Insights">
                        <List
                            items={[
                                <TestResult
                                    title="I made visual adjustments to ensure the design was more cohesive and consistent throughout the user experience."
                                    before={
                                        <Stack gap={2}>
                                            <ImageView
                                                src={test1Before1Image}
                                                alt="Visual Before 1"
                                                maxWidth="300px"
                                                withBorder
                                            />
                                            <ImageView
                                                src={test1Before2Image}
                                                alt="Visual Before 2"
                                                maxWidth="300px"
                                                withBorder
                                            />
                                        </Stack>
                                    }
                                    after={
                                        <Stack gap={2}>
                                            <ImageView
                                                src={test1After1Image}
                                                alt="Visual After 1"
                                                maxWidth="300px"
                                                withBorder
                                            />
                                            <ImageView
                                                src={test1After2Image}
                                                alt="Visual After 2"
                                                maxWidth="300px"
                                                withBorder
                                            />
                                        </Stack>
                                    }
                                />,
                                <TestResult
                                    title="I integrated AI-generated suggestions to elevate the customization experience to a whole new level by offering smarter, more personalized options for users"
                                    after={
                                        <ColumnarImageList
                                            images={[
                                                [
                                                    <ImageView
                                                        src={test2After1Image}
                                                        alt="AI-generated suggestions 1"
                                                        maxWidth="300px"
                                                        withBorder
                                                    />,
                                                    <ImageView
                                                        src={test2After4Image}
                                                        alt="AI-generated suggestions 4"
                                                        maxWidth="300px"
                                                        withBorder
                                                    />,
                                                ],
                                                [
                                                    <ImageView
                                                        src={test2After2Image}
                                                        alt="AI-generated suggestions 2"
                                                        maxWidth="300px"
                                                        withBorder
                                                    />,
                                                    <ImageView
                                                        src={test2After5Image}
                                                        alt="AI-generated suggestions 5"
                                                        maxWidth="300px"
                                                        withBorder
                                                    />,
                                                ],
                                                [
                                                    <ImageView
                                                        src={test2After3Image}
                                                        alt="AI-generated suggestions 3"
                                                        maxWidth="300px"
                                                        withBorder
                                                    />,
                                                ],
                                            ]}
                                        />
                                    }
                                />,
                            ]}
                        />
                        <Paragraph>
                            Once a user selects their base drink (e.g., tea
                            type), the AI suggests suitable flavors, toppings,
                            and sweetness levels. Over time, the system learns
                            the user's preferences and begins offering
                            personalized recommendations based on their past
                            selections.
                        </Paragraph>
                    </SubSection>
                    <SubSection heading="Next Steps">
                        <Paragraph>
                            Moving forward, I plan to continue testing the app
                            to validate the effectiveness of the solutions
                            implemented for user pain points. Additionally, I
                            will conduct further user research to uncover any
                            new insights or areas for improvement. Based on
                            these findings, I aim to iterate on the design and
                            introduce updates that enhance the overall user
                            experience, ensuring the app remains aligned with
                            user needs.
                        </Paragraph>
                    </SubSection>
                </WorkSubsection>
            </WorkSection>
        </>
    );
}
