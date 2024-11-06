import React, { PropsWithChildren } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { Paragraph, Subtitle } from '../typography';
import { PersonaQuote } from './persona-quote';
import { PersonaPicture, PersonaPictureProps } from './persona-picture';
import { List } from '../list/list';
import { Persona } from './persona';
import Stack from '@mui/system/Stack';
import { styled } from '../theme';
import { ImageSize } from '../image';

const ResponsiveColumn = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        paddingRight: '0px',
        paddingLeft: '0px',
    },
}));

const InfoColumn = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        order: 2,
        paddingRight: '0px',
        paddingLeft: '0px',
    },
}));

const PictureColumn = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        order: 1,
        paddingRight: '0px',
        paddingLeft: '0px',
    },
}));

export interface CompactPersonaCardProps {
    persona: Persona;
    imagePosition?: 'left' | 'right';
    size?: ImageSize;
    maxSizes?: PersonaPictureProps['maxSizes'];
}

export function CompactPersonaCard({
    persona,
    imagePosition = 'left',
    size = [360, 360],
    maxSizes,
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
        <InfoColumn xs={12} sm={12} md={8}>
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
        </InfoColumn>
    );
    const imageCol = (
        <PictureColumn xs={12} sm={12} md={4} justifyItems="center">
            <PersonaPicture
                src={picture}
                alt={`Picture of ${name}`}
                maxWidth={`${size[0]}px`}
                maxHeight={`${size[1]}px`}
                maxSizes={maxSizes}
            />
        </PictureColumn>
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
