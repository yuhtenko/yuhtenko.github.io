import React, { PropsWithChildren } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { Paragraph, Subtitle, Text } from '../typography';
import { PersonaQuote } from './persona-quote';
import { PersonaPicture } from './persona-picture';
import { List } from '../list/list';
import { Persona } from './persona';
import Stack from '@mui/system/Stack';

export interface CompactPersonaCardProps {
    persona: Persona;
    imagePosition?: 'left' | 'right';
}

export function CompactPersonaCard({
    persona,
    imagePosition = 'left',
    children,
}: PropsWithChildren<CompactPersonaCardProps>) {
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

    const infoCol = (
        <Grid xs={12} md={8}>
            <Stack spacing={3}>
                <Subtitle color="red">{name}</Subtitle>
                <PersonaQuote>{quote}</PersonaQuote>
                <List
                    variant={'none'}
                    spacing={0}
                    sx={{ marginTop: 0 }}
                    items={info}
                />
                <Paragraph>{children}</Paragraph>
            </Stack>
        </Grid>
    );
    const imageCol = (
        <Grid xs={8} md={4}>
            <PersonaPicture
                src={picture}
                alt={`Picture of ${name}`}
                maxWidth={'360px'}
                maxHeight={'480px'}
            />
        </Grid>
    );

    const gridItems = [];

    if (imagePosition === 'right') {
        gridItems.push(infoCol);
        gridItems.push(imageCol);
    } else {
        gridItems.push(imageCol);
        gridItems.push(infoCol);
    }

    return (
        <Grid container spacing={2}>
            {gridItems}
        </Grid>
    );
}
