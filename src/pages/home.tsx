import toChunks from 'lodash.chunk';
import * as React from 'react';
import Stack from '@mui/system/Stack';
import Grid from '@mui/system/Unstable_Grid';
import { CSSObject } from '@mui/styled-engine';
import { OutboundLink } from 'gatsby-plugin-google-gtag';
import data from '../../website.json';
import { Button } from '../components/buttons';
import { ContactForm } from '../components/form';
import {
    FigmaIcon,
    IllustratorIcon,
    LightroomIcon,
    PhotoshopIcon,
} from '../components/icons';
import { List } from '../components/list';
import { HeroPageSection, PageSection } from '../components/sections';
import { Square } from '../components/shape';
import { SuperCircle, SuperTriangle } from '../components/super-shapes';
import { styled, useTheme } from '../components/theme';
import { Heading, Paragraph } from '../components/typography';
import { ClickAwayListener } from '../components/utils';
import { WorkItemData, WorkList } from '../components/work-list';
import resumePdf from './assets/yulia_yukhtenko_resume.pdf';

const MainHeading = styled(Heading)(({ theme }) => ({
    marginRight: '0 !important',
}));

const ResumeButton = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        maxWidth: '250px',
    },
    '& .normal': {
        display: 'block',
    },
    '& .hover': {
        display: 'none',
    },
    '&:hover': {
        '& .normal': {
            display: 'none',
        },
        '& .hover': {
            display: 'block',
        },
    },
}));

const ElevatedGrid = styled(Grid)(({ theme }) => ({
    zIndex: 10,
    backgroundColor: theme.palette.secondary.main,
}));

const Relative = styled('div')(({ theme }) => ({
    position: 'relative',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));

const SuperTriangleWrapper = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: '-30vw',
    top: '100%',
    [theme.breakpoints.down('lg')]: {
        transform: 'scale(0.7)',
    },
}));

const AnimatedContactForm = styled(ContactForm)(({ theme }) => ({
    transition: 'all 0.5s ease-in-out',
}));

interface SuperCircleWrapperProps {
    align?: 'left' | 'right' | 'center';
    position?: 'background' | 'foreground';
}

function toAlignment(align?: 'left' | 'right' | 'center'): CSSObject {
    switch (align) {
        case 'left':
            return {
                left: '0',
                transform: 'translate(0%, -25%)',
            };
        case 'right':
            return {
                right: 0,
            };
        case 'center':
            return {
                top: '50%',
                right: '50%',
                transform: 'translate(50%, 0%)',
            };
        default:
            return {};
    }
}

const SuperCircleWrapper = styled('div')<SuperCircleWrapperProps>(
    ({ theme, align, position }) => ({
        position: 'absolute',
        top: '100%',
        transform: 'translateY(-25%)',
        transition: `all 0.5s ease-in-out`,
        ...toAlignment(align),
        [theme.breakpoints.down('md')]: {
            transform: 'translateY(-15%)',
            ...toAlignment(align),
        },
        [theme.breakpoints.down('sm')]: {
            transform: 'translateY(0)',
            ...toAlignment(align),
        },
    })
);

interface Message {
    type: 'success' | 'error';
    text: string | string[];
}

export default function HomePage() {
    const theme = useTheme();
    const interests = toChunks(data.interests, 3);
    const [message, setMessage] = React.useState<Message | null>(null);
    const handleDownload = () => {
        window.open(resumePdf);
    };
    const handleSuccessEmail = () => {
        setMessage({
            type: 'success',
            text: [
                'Thank you for your message!',
                'I will get back to you soon.',
            ],
        });
    };
    const handleErrorEmail = (err: string | string[]) =>
        setMessage({
            type: 'error',
            text: err ?? 'Oops! Something went wrong, try again later.',
        });

    const handleClickAway = React.useCallback(() => {
        setMessage(null);
    }, []);

    return (
        <>
            <HeroPageSection heading={['UX/UI', 'DESIGN']}>
                <Stack direction={'row'} alignItems={'baseline'} spacing={2}>
                    <MainHeading size={'title'} variant={'bold'}>
                        Portfolio
                    </MainHeading>
                    <Square
                        size={13}
                        weight={'bold'}
                        variant={'outline'}
                        sx={{
                            transform: 'rotate(45deg)',
                            marginLeft: '8px',
                        }}
                    />
                </Stack>
                <ResumeButton onClick={handleDownload}>
                    <span className="normal">{data.title}</span>
                    <span className={'hover'}>Download Resume</span>
                </ResumeButton>
            </HeroPageSection>
            {/*<PageSection*/}
            {/*    id="quote"*/}
            {/*    paddingBottom={{ xs: '78px', md: '128px' }}*/}
            {/*>*/}
            {/*    <Stack justifyContent={'center'} alignItems={'center'}>*/}
            {/*        <Quote author="Paul Rand">*/}
            {/*            «Design&nbsp;is&nbsp;so&nbsp;simple,&nbsp;that&apos;s&nbsp;why&nbsp;*/}
            {/*            {'\u200b'}*/}
            {/*            it&nbsp;is&nbsp;so&nbsp;complicated.»*/}
            {/*        </Quote>*/}
            {/*    </Stack>*/}
            {/*</PageSection>*/}
            <PageSection
                id="work"
                heading={['My', 'Work']}
                variant={['normal', 'outline']}
            >
                <WorkList content={(data?.projects as WorkItemData[]) ?? []} />
            </PageSection>
            <PageSection id="about" heading={['About', 'Me']} variant="outline">
                <Relative>
                    <SuperTriangleWrapper>
                        <SuperTriangle transform="translateY(-28%)" />
                    </SuperTriangleWrapper>
                </Relative>
                <Grid
                    container
                    spacing={{
                        md: theme.sizes.spacing.heading1[0],
                        xs: theme.sizes.spacing.heading1[1],
                    }}
                    direction={'column'}
                >
                    <ElevatedGrid xs={12}>
                        <Paragraph>
                            I love learning psychology, as I think our
                            fundamental understanding of how people think, feel,
                            and behave is&nbsp;critical. I aim to design
                            user-centered products and experiences that solve
                            user and business problems. My&nbsp;process is
                            hands-on, collaborative, and iterative and my goal
                            is to create products and experiences that
                            are&nbsp;meaningful and impactful, and I'm
                            especially interested in utilizing new technologies
                            to improve people's lives in&nbsp;innovative ways.{' '}
                        </Paragraph>
                        <Paragraph>
                            I attended dozens of classes to study art and{' '}
                            <OutboundLink href={data.photoPortfolioUrl}>
                                photography
                            </OutboundLink>
                            , which helped me develop visual storytelling
                            and&nbsp;creative thinking. An engineering
                            background provides me with valuable skills and
                            perspectives that can also help me become a
                            successful UX/UI designer.
                        </Paragraph>
                    </ElevatedGrid>
                    <Grid xs={12}>
                        <Grid container spacing={{ xs: 3, md: 10, lg: 12 }}>
                            <Grid xs={12} sm={6}>
                                <Heading size={'subheading1'} variant={'bold'}>
                                    Languages
                                </Heading>
                                <List items={data?.languages ?? []} />
                            </Grid>

                            <Grid xs={12} sm={6}>
                                <Heading size={'subheading1'} variant={'bold'}>
                                    Interests
                                </Heading>
                                <Stack direction="row" spacing={6}>
                                    {interests.map((items, idx) => (
                                        <List
                                            key={idx.toString()}
                                            items={items}
                                        />
                                    ))}
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={12}>
                        <Heading size={'subheading1'} variant={'bold'}>
                            Digital Skills
                        </Heading>
                        <Stack
                            direction="row"
                            spacing={{ xs: 1, sm: 2, md: 3 }}
                        >
                            <FigmaIcon className="skill" />
                            <IllustratorIcon className="skill" />
                            <PhotoshopIcon className="skill" />
                            <LightroomIcon className="skill" />
                        </Stack>
                    </Grid>
                </Grid>
            </PageSection>
            <PageSection
                id="contact"
                heading={['Contact', 'Me']}
                variant={'outline'}
                noOffset
            >
                <ClickAwayListener
                    disable={message == null}
                    onClickAway={handleClickAway}
                >
                    <Relative
                        sx={{
                            display: 'block !important',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <SuperCircleWrapper
                            align={message ? 'center' : 'right'}
                            position={message ? 'foreground' : 'background'}
                        >
                            <SuperCircle
                                text={message?.text}
                                error={message?.type === 'error'}
                            />
                        </SuperCircleWrapper>
                    </Relative>
                </ClickAwayListener>
                <AnimatedContactForm
                    sx={{ right: message ? '150%' : '0' }}
                    zIndex={15}
                    url={data.contactFormUrl}
                    onSubmit={handleSuccessEmail}
                    onError={handleErrorEmail}
                />
            </PageSection>
        </>
    );
}
