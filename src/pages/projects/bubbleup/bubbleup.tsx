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
import { VerticalTable } from '../../../components/table/vertical';
import { Tile } from '../../../components/tile';
import { Theme, toColor, useTheme } from '../../../components/theme';
import Grid from '@mui/system/Unstable_Grid';
import { XYTable } from '../../../components/table/xy';

export const PROJECT_ID = 'bubbleup';

export default function BubbleupProjectPage() {
    const theme = useTheme();
    return (
        <>
            <ProjectHeroWorkSection
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
                            <Text>July - September 2024.</Text>
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
                        <Subtitle>Elevator pitch</Subtitle>
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
                        <Subtitle>Customization options</Subtitle>
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
                            <Subtitle>Target audience</Subtitle>
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
                            <Subtitle color={'blue'}>User Needs</Subtitle>
                            <Paragraph>
                                The website needs to enable the user to:
                            </Paragraph>
                            <List
                                items={[
                                    'College students',
                                    'Young professionals',
                                    'Bubble tea enthusiasts',
                                    'Those who have never tried Boba before',
                                ]}
                            />
                        </Grid>

                        <Grid xs={12} sm={6}>
                            <Subtitle color={'blue'}>Client Needs</Subtitle>
                            <Paragraph>
                                The website needs to enable the client to:
                            </Paragraph>
                            <List
                                items={[
                                    'Gender - Any',
                                    'Education - College or higher',
                                    'Occupations - College students, office managers/secretaries, administrators, nearby business owners',
                                    'Age - 16-40',
                                    'Location - Chapel Hill, NC (UNC Campus)',
                                ]}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Subtitle color={'blue'}>
                                Content Requirements
                            </Subtitle>
                            <List
                                items={[
                                    'Personality & Attitudes - Open-minded, Sassy',
                                    'Trendy Values - Liberal',
                                    'Lifestyles: On-the-go, Social',
                                    'Spontaneous, Academic',
                                ]}
                            />
                        </Grid>
                        <Grid xs={12} sm={6}>
                            <Subtitle color={'blue'}>
                                Functionality Requirements
                            </Subtitle>
                            <List
                                items={[
                                    'Usage Frequency - Frequent (students, office workers), Occasional (social users, boba lovers)',
                                    'Purchasing Behavior - Customization enthusiasts, Convenience seekers',
                                    'Decision-Making - On-the-go deciders',
                                    'Flavor explorers Brand Loyalty - Loyalty-driven repeaters, Social sharers',
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
                        <Subtitle>Pain Points</Subtitle>
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
            </WorkSection>
        </>
    );
}
