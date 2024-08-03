import React, { PropsWithChildren } from 'react';
import { Paragraph, Subtitle, Text } from '../typography';
import { styled, useTheme } from '../theme';
import Grid from '@mui/system/Unstable_Grid';
import { PersonaPicture } from './persona-picture';
import { List } from '../list/list';
import { PersonaQuote } from './persona-quote';

const PersonaDescription = styled(Paragraph)(({ theme }) => ({
    display: 'inline-block',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '26px',
    },
}));

export interface Persona {
    picture: string;
    name: string;
    age: number;
    education: string;
    location: string;
    family: string;
    occupation: string;
    quote: string;
    goals: string[];
    frustrations: string[];
}

export interface PersonaCardProps {
    persona: Persona;
}

export function PersonaCard({
    persona,
    children,
}: PropsWithChildren<PersonaCardProps>) {
    const theme = useTheme();
    const { picture, name, quote } = persona;
    return (
        <Grid container spacing={2}>
            <Grid xs={12}>
                <Subtitle color="red">{name}</Subtitle>
            </Grid>
            <Grid xs={12}>
                <PersonaQuote>{quote}</PersonaQuote>
            </Grid>
            <Grid
                key="basic-info"
                container
                xs={12}
                lg={5}
                xl={4}
                alignItems={'center'}
                direction={{ xs: 'row', lg: 'column' }}
            >
                <Grid key={'picture'} xs={12} sm={6} lg={12}>
                    <PersonaPicture src={picture} alt={`Picture of ${name}`} />
                </Grid>
                <Grid key={'info'} xs={12} sm={6} lg={12}>
                    <List
                        variant={'none'}
                        items={[
                            `Age: ${persona.age}`,
                            `Education: ${persona.education}`,
                            `Location: ${persona.location}`,
                            `Family: ${persona.family}`,
                            `Occupation: ${persona.occupation}`,
                        ]}
                    />
                </Grid>
            </Grid>
            <Grid key="details" container xs={12} lg={7} xl={8}>
                <Grid key="goals" xs={12} sm={6}>
                    <Text>Goals</Text>
                    <List items={persona.goals} />
                </Grid>
                <Grid key="frustrations" xs={12} sm={6}>
                    <Text>Frustrations</Text>
                    <List items={persona.frustrations} />
                </Grid>
                <Grid key="description" xs={12}>
                    <PersonaDescription>{children}</PersonaDescription>
                </Grid>
            </Grid>
        </Grid>
    );
}
