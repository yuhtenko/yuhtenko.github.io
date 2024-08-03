import React from 'react';
import Stack from '@mui/system/Stack';
import { styled } from '../theme';
import { Heading, Subtitle } from '../typography';
import { useAppData } from '../app/context';

const Container = styled(Stack)(({ theme }) => ({
    minHeight: '88vh',
}));

const HeroContent = styled(Stack)(({ theme }) => ({
    paddingTop: '16vh',
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

const HeroShapes = styled(Stack)(({ theme }) => ({
    justifyContent: 'flex-end',
    ['@media (max-width: 425px)']: {
        justifyContent: 'space-between',
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
    },
    [theme.breakpoints.down('md')]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

const HeroSubtitle = styled(Subtitle)(({ theme }) => ({
    display: 'inline-block',
    fontStyle: 'italic',
}));

export interface WorkMainSectionProps {
    id: string;
    number: string;
    heading: string;
    description: string;
    shapes?: any;
    className?: string;
}

export function HeroWorkSection({
    id,
    number,
    heading,
    description,
    shapes,
    className,
}: WorkMainSectionProps) {
    return (
        <Container
            id={id}
            direction={'column'}
            justifyContent={'space-between'}
            className={className}
        >
            <HeroContent
                direction={'row'}
                spacing={{ xs: 1, sm: 2, md: 3 }}
                alignItems="baseline"
                justifyContent="flex-start"
            >
                <Heading
                    size={'title'}
                    variant={['outline', 'bold']}
                    className="hero-number"
                    noMargin
                >
                    {number}
                </Heading>
                <Stack direction={'column'}>
                    <Heading
                        size={'title'}
                        className="hero-heading"
                        variant={'bold'}
                        noMargin
                    >
                        {heading}
                    </Heading>
                    <HeroSubtitle
                        className={'heading-subtitle'}
                        weight={'light'}
                    >
                        {description}
                    </HeroSubtitle>
                </Stack>
            </HeroContent>
            <HeroShapes direction={'row'}>{shapes}</HeroShapes>
        </Container>
    );
}

export interface ProjectHeroWorkSectionProps
    extends Pick<WorkMainSectionProps, 'shapes' | 'className'> {
    readonly projectId: string;
    readonly heading?: string;
}

export function ProjectHeroWorkSection({
    projectId,
    heading,
    ...rest
}: ProjectHeroWorkSectionProps) {
    const data = useAppData();
    const project = data.findProject(projectId);

    if (!project) {
        throw new Error(`Project with id ${projectId} not found`);
    }

    return (
        <HeroWorkSection
            {...rest}
            id="hero-section"
            number={project.number}
            description={project.description}
            heading={heading ?? project.title}
        />
    );
}
