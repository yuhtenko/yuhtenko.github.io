import { navigate } from 'gatsby';
import React, { useCallback } from 'react';
import { GridProps } from '@mui/system';
import Box from '@mui/system/Box';
import Stack from '@mui/system/Stack';
import Grid from '@mui/system/Unstable_Grid';
import { Color, styled } from '../theme';
import { Caption, Heading, HeadingProps } from '../typography';
import { getWorkItemShape } from './work-item-shape';

export type WorkItemShape = 'rectangle' | 'triangle' | 'half-circle';

export interface WorkItemData {
    id: string;
    title: string;
    description: string;
    shape: WorkItemShape;
    color: Color;
    path: string;
}

const CONTENT_HEIGHT = 120;
const ANIM_DUR = 0.15;
const ANIM_DEL = ANIM_DUR;
const ANIM_EAS = 'linear';

type CSSPropertyWithDelay = [string, number];

type CSSProperty = string;

type CSSProperties = Array<CSSProperty | CSSPropertyWithDelay>;

/**
 * The transition props for the shape.
 * The first array is the CSS property names that should be transitioned without delay on hover.
 * The second array is the CSS property names that should be transitioned with delay on hover.
 */
type TransitionGroups = [
    CSSProperties,
    CSSProperties,
    CSSProperties | undefined
];

const toTransitionString = (
    props: CSSProperties,
    withDelay: boolean,
    delay = ANIM_DEL
): string => {
    return props
        .map((prop) => {
            const propName = Array.isArray(prop) ? prop[0] : prop;
            const propDelay = Array.isArray(prop) ? prop[1] : delay;
            return `${propName} ${ANIM_DUR}s ${ANIM_EAS} ${
                withDelay ? propDelay : 0
            }s`;
        })
        .join(', ');
};

/**
 * Create a transition string for the given CSS property groups.
 * If hover is true, the first array will be transitioned without delay, the second array with delay.
 */
const createTransition = (groups: TransitionGroups, hover: boolean) => {
    const [start, mid, end] = groups;
    const res = [];

    if (start && start.length > 0) {
        res.push(toTransitionString(start, !hover));
    }

    if (mid && mid.length > 0) {
        res.push(toTransitionString(mid, hover));
    }

    if (end && end.length > 0) {
        res.push(toTransitionString(end, hover, ANIM_DEL * 1.5));
    }

    return res.join(', ');
};

const RECTANGLE_TRANSITION_GROUPS: TransitionGroups = [
    ['top', 'height', 'border-top-right-radius', 'border-bottom-right-radius'],
    ['width'],
    ['border-top-left-radius', 'border-bottom-left-radius'],
];

interface ContentProps extends GridProps {
    shape: WorkItemShape;
}

const HEADER_ANIM_OUT_DUR: Record<WorkItemShape, string> = {
    ['rectangle']: '15ms',
    ['triangle']: '20ms',
    ['half-circle']: '20ms',
};

const HEADER_ANIM_IN_DEL: Record<WorkItemShape, string> = {
    ['rectangle']: '285ms',
    ['triangle']: '325ms',
    ['half-circle']: '355ms',
};

const TITLE_ANIM_OUT_DEL: Record<WorkItemShape, string> = {
    ['rectangle']: '25ms',
    ['triangle']: '25ms',
    ['half-circle']: '25ms',
};

const TITLE_ANIM_IN_DEL: Record<WorkItemShape, string> = {
    ['rectangle']: '260ms',
    ['triangle']: '300ms',
    ['half-circle']: '330ms',
};

const DESC_ANIM_IN_DEL: Record<WorkItemShape, string> = {
    ['rectangle']: '255ms',
    ['triangle']: '308ms',
    ['half-circle']: '330ms',
};

const Content = styled(Grid)<ContentProps>(({ theme, shape }) => ({
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 4px 10px rgba(58, 53, 55, 0.2)',
    borderRadius: theme.shape.borderRadius,
    height: CONTENT_HEIGHT,
    width: '100%',
    '.work-item-header:before': {
        transition: `width ${HEADER_ANIM_OUT_DUR[shape]} ${ANIM_EAS}`,
    },
    '& .work-item-title:before': {
        transition: `width 20ms ${ANIM_EAS} ${TITLE_ANIM_OUT_DEL[shape]}`,
    },
    '& .work-item-description:before': {
        transition: `width 20ms ${ANIM_EAS} ${TITLE_ANIM_OUT_DEL[shape]}`,
    },
    '& .shape': {
        right: 0,
        top: '16%',
    },
    '& .shape-rectangle': {
        transition: createTransition(RECTANGLE_TRANSITION_GROUPS, false),
    },
    '& .shape-triangle': {
        '& .shape-triangle-left, & .shape-triangle-right': {
            transition: `
                    height ${ANIM_DUR}s ${ANIM_EAS} ${ANIM_DUR}s,
                    transform ${ANIM_DUR}s ${ANIM_EAS} ${ANIM_DUR}s
                `,
        },
        transition: `
            height ${ANIM_DUR}s ${ANIM_EAS} ${ANIM_DUR * 2}s,
            top ${ANIM_DUR}s ${ANIM_EAS} ${ANIM_DUR * 2}s`,
        right: '-40px',
        zIndex: 10,
    },
    '& .shape-layer-triangle:after': {
        content: '""',
        display: 'inline-block',
        position: 'relative',
        height: '100%',
        width: '0px',
        float: 'right',
        backgroundColor: theme.palette.red.main,
        transition: `
                width ${ANIM_DUR}s ${ANIM_EAS}
            `,
        zIndex: 11,
    },
    '& .shape-half-circle': {
        transition: `
                width ${ANIM_DUR}s ${ANIM_EAS},
                
                border-radius ${ANIM_DUR / 2}s ${ANIM_EAS}  ${ANIM_DUR}s,
        
                top ${ANIM_DUR / 1.5}s ${ANIM_EAS} ${ANIM_DUR * 1.6}s,
                height ${ANIM_DUR / 1.5}s ${ANIM_EAS} ${ANIM_DUR * 1.6}s
        `,
    },
    '&:hover': {
        '& .work-item-header:before': {
            width: '0%',
            transition: `width 20ms ${ANIM_EAS} ${HEADER_ANIM_IN_DEL[shape]}`,
        },

        '& .work-item-title:before': {
            width: '0%',
            transition: `width 20ms ${ANIM_EAS} ${TITLE_ANIM_IN_DEL[shape]}`,
        },

        '& .work-item-description:before': {
            width: '0%',
            transition: `width 20ms ${ANIM_EAS} ${DESC_ANIM_IN_DEL[shape]}`,
        },

        '& .shape-rectangle, & .shape-half-circle': {
            top: 0,
            height: '100%',
            width: '100%',
        },
        '& .shape-rectangle': {
            borderTopRightRadius: theme.shape.borderRadius,
            borderBottomRightRadius: theme.shape.borderRadius,
            borderTopLeftRadius: theme.shape.borderRadius,
            borderBottomLeftRadius: theme.shape.borderRadius,

            transition: createTransition(RECTANGLE_TRANSITION_GROUPS, true),
        },
        '& .shape-layer-triangle:after': {
            width: '100%',
            transition: `
                width ${ANIM_DUR}s ${ANIM_EAS} ${ANIM_DEL * 1.3}s
            `,
        },
        '& .shape-triangle': {
            '& .shape-triangle-left, & .shape-triangle-right': {
                transition: `
                    height ${ANIM_DUR}s ${ANIM_EAS} 0.05s,
                    transform ${ANIM_DUR}s ${ANIM_EAS} 0.05s
                `,
            },
            '& .shape-triangle-left': {
                transform: 'rotate(-90deg)',
            },
            '& .shape-triangle-right': {
                transform: 'rotate(90deg)',
            },
            transition: `
                height ${ANIM_DUR / 2}s ${ANIM_EAS},
                top ${ANIM_DUR / 2}s ${ANIM_EAS}`,
            top: 0,
            height: '100%',
        },
        '& .shape-half-circle': {
            borderRadius: 0,
            transition: `
                top ${ANIM_DUR}s ${ANIM_EAS},
                height ${ANIM_DUR}s ${ANIM_EAS},
                
                border-radius ${ANIM_DUR / 2}s ${ANIM_EAS}  ${ANIM_DUR}s,
                   
                width ${ANIM_DUR}s ${ANIM_EAS} ${ANIM_DUR * 1.5}s
            `,
        },
    },
}));

const Header = styled(Heading)<HeadingProps>(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    left: -24,
    ...theme.typography.variant.h1,
    lineHeight: `${CONTENT_HEIGHT}px`,
    [theme.breakpoints.down('md')]: {
        ...theme.typography.variant.h2,
        left: -14,
    },
    zIndex: 16,
    '&:before': {
        content: 'attr(aria-valuetext)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        color: theme.palette.primary.main,
        '-webkit-text-stroke-color': theme.palette.primary.main,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 17,
    },
}));

const Title = styled(Heading)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    color: theme.palette.secondary.main,
    textTransform: 'none',
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.variant.h9,
        textTransform: 'none',
        fontWeight: theme.typography.fontWeight.normal,
    },
    zIndex: 16,
    '&:before': {
        content: 'attr(aria-valuetext)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        color: theme.palette.primary.main,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 17,
    },
}));

const Description = styled(Caption)(({ theme }) => ({
    position: 'relative',
    color: theme.palette.secondary.main,
    fontStyle: 'italic',
    zIndex: 16,
    '&:before': {
        content: 'attr(aria-valuetext)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        color: theme.palette.grey.main,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 17,
    },
}));

const ShapeLayer = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    borderRadius: theme.shape.borderRadius,
    zIndex: 15,
    left: 0,
    top: 0,
}));

export interface WorkItemProps extends WorkItemData {
    number: string;
}

export function WorkItem({
    id,
    title,
    description,
    shape,
    color,
    path,
    number,
}: WorkItemProps) {
    const handleClick = useCallback(() => {
        navigate(path);
    }, [path]);
    const Shape = getWorkItemShape(shape);
    const attrs = {
        'aria-text': number,
    };

    return (
        <Content
            container
            shape={shape}
            direction="row"
            alignItems={'stretch'}
            alignContent={'center'}
            justifyContent={'space-between'}
            onClick={handleClick}
        >
            <Grid xs={2}>
                <Header
                    className="work-item-header"
                    variant={'outline'}
                    color={color}
                    noMargin
                    {...attrs}
                >
                    {number}
                </Header>
            </Grid>
            <Grid xs={6} sm={9}>
                <Stack
                    spacing={1}
                    height={'100%'}
                    flexWrap={'nowrap'}
                    alignItems={'flex-start'}
                    alignContent={'space-evenly'}
                    justifyContent={'center'}
                >
                    <Title
                        size={'subheading1'}
                        variant={'normal'}
                        className="work-item-title"
                        aria-valuetext={title}
                    >
                        {title}
                    </Title>
                    <Description
                        className="work-item-description"
                        aria-valuetext={description}
                    >
                        {description}
                    </Description>
                </Stack>
            </Grid>
            <Grid xs={1}>
                <ShapeLayer className={`shape-layer-${shape}`}>
                    <Shape
                        className={`shape shape-${shape}`}
                        direction="left"
                        position="absolute"
                        color={color}
                    />
                </ShapeLayer>
            </Grid>
        </Content>
    );
}
