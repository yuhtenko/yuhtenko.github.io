import React, { PropsWithChildren } from 'react';
import { Color, styled } from '../theme';
import { Heading } from '../typography';
import Stack from '@mui/system/Stack';

export type Position = 'left' | 'right';

const BackgroundExtenderWrapper = styled('div')<{
    readonly position: 'left' | 'right';
}>(({ theme, position }) => ({
    position: 'absolute',
    height: '42px',
    width: position === 'left' ? '30%' : '25%',
    ...(position === 'left' ? { left: 0 } : { right: 0 }),
    [theme.breakpoints.down('md')]: {
        height: '36px',
    },
}));

const BackgroundExtender = styled('div')<{
    color: Color;
}>(({ theme, color }) => ({
    position: 'relative',
    backgroundColor: theme.palette[color].main,
    width: '100%',
    height: '100%',
}));

const Background = styled('div')<{
    color: Color;
    position: Position;
}>(({ theme, color, position }) => {
    const property = position === 'left' ? 'paddingRight' : 'paddingLeft';

    return {
        position: 'relative',
        backgroundColor: theme.palette[color].main,
        height: '100%',
        [property]: theme.spacing(8),
        [theme.breakpoints.down('sm')]: {
            [property]: theme.spacing(4),
        },
    };
});

const SectionTitle = styled(Heading)({
    position: 'relative',
    zIndex: 10,
    margin: '0px !important',
    textTransform: 'none !important',
});

export interface WorkSubsectionProps {
    readonly title: string;
    readonly color: Color;
    readonly position: Position;
}

export function WorkSubsection({
    title,
    color,
    position,
    children,
}: PropsWithChildren<WorkSubsectionProps>) {
    const justifyContent = position === 'left' ? 'flex-start' : 'flex-end';
    return (
        <Stack marginBottom={5} gap={3}>
            <Stack
                direction="row"
                justifyContent={justifyContent}
                alignItems="center"
            >
                <Background color={color} position={position}>
                    <SectionTitle
                        color="secondary"
                        size="heading2"
                        variant="normal"
                    >
                        {title}
                    </SectionTitle>
                </Background>
                <BackgroundExtenderWrapper position={position}>
                    <BackgroundExtender color={color} />
                </BackgroundExtenderWrapper>
            </Stack>

            {children}
        </Stack>
    );
}
