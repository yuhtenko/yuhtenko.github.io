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
import { useTheme } from '../../../components/theme';
import Grid from '@mui/system/Unstable_Grid';

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
                <WorkSubsection title="Strategy" color="red" position="right">
                    <Grid container gap={1} direction={'row'}>
                        <Grid xs={12}>
                            <Subtitle>Target audience</Subtitle>
                        </Grid>

                        <Grid xs={6}>
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

                        <Grid xs={6}>
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
                        <Grid xs={6}>
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
                        <Grid xs={6}>
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
                </WorkSubsection>
            </WorkSection>
        </>
    );
}
