import React, { PropsWithChildren } from 'react';
import { Paragraph, Subtitle, Text } from '../typography';
import { styled } from '../theme';
import Grid from '@mui/system/Unstable_Grid';
import { PersonaPicture } from './persona-picture';
import { List } from '../list/list';
import { PersonaQuote } from './persona-quote';

const ResponsiveColumn = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        paddingRight: '0px',
        paddingLeft: '0px',
    },
}));

const PersonaDescription = styled(Paragraph)(({ theme }) => ({
    display: 'inline-block',
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '26px',
    },
}));

export interface Persona {
    picture: string;
    name: string;
    quote: string;
    age?: number;
    education?: string;
    location?: string;
    family?: string;
    occupation?: string;
    goals?: string[];
    frustrations?: string[];
}

export interface PersonaCardProps {
    persona: Persona;
}

export function PersonaCard({
    persona,
    children,
}: PropsWithChildren<PersonaCardProps>) {
    const { picture, name, quote } = persona;
    const info = [];

    if (persona.age) {
        info.push(`Age: ${persona.age}`);
    }

    if (persona.education) {
        info.push(`Education: ${persona.education}`);
    }

    if (persona.location) {
        info.push(`Location: ${persona.location}`);
    }

    if (persona.family) {
        info.push(`Family: ${persona.family}`);
    }

    if (persona.occupation) {
        info.push(`Occupation: ${persona.occupation}`);
    }

    return (
        <Grid container spacing={2}>
            <ResponsiveColumn xs={12}>
                <Subtitle color="red">{name}</Subtitle>
            </ResponsiveColumn>
            <ResponsiveColumn xs={12}>
                <PersonaQuote>{quote}</PersonaQuote>
            </ResponsiveColumn>
            <ResponsiveColumn
                key="basic-info"
                container
                xs={12}
                lg={5}
                xl={4}
                alignItems={'center'}
                direction={{ xs: 'row', lg: 'column' }}
            >
                <Grid key={'picture'} xs={12} sm={6} lg={12}>
                    <PersonaPicture
                        src={picture}
                        alt={`Picture of ${name}`}
                        maxWidth={'360px'}
                    />
                </Grid>
                <Grid key={'info'} xs={12} sm={6} lg={12}>
                    <List
                        variant={'none'}
                        spacing={0}
                        sx={{ marginTop: 0 }}
                        items={info}
                    />
                </Grid>
            </ResponsiveColumn>
            <ResponsiveColumn key="details" container xs={12} lg={7} xl={8}>
                <Grid key="goals" xs={12} sm={6}>
                    <Text>Goals</Text>
                    <List items={persona.goals || []} />
                </Grid>
                <Grid key="frustrations" xs={12} sm={6}>
                    <Text>Frustrations</Text>
                    <List items={persona.frustrations || []} />
                </Grid>
                <Grid key="description" xs={12}>
                    <PersonaDescription>{children}</PersonaDescription>
                </Grid>
            </ResponsiveColumn>
        </Grid>
    );
}
