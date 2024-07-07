import React, { PropsWithChildren } from 'react';
import { Color, styled } from '../theme';
import { Subtitle } from '../typography';
import Stack from '@mui/system/Stack';

const SectionSubtitleBackgroundWrapper = styled('div')<{
    readonly position: 'left' | 'right';
}>(({ theme, position }) => ({
    position: 'absolute',
    height: '40px',
    width: position === 'left' ? '30%' : '25%',
    ...(position === 'left' ? { left: 0 } : { right: 0 }),

    [theme.breakpoints.up(1999)]: {
        width: position === 'left' ? '36%' : '31%',
    },
    [theme.breakpoints.down(1024)]: {
        width: '40%',
    },
    [theme.breakpoints.down('sm')]: {
        width: '40%',
    },
    [theme.breakpoints.down(424.9)]: {
        width: '50%',
    },
}));

const SectionSubtitleBackground = styled('div')<{
    color: Color;
}>(({ theme, color }) => ({
    position: 'relative',
    backgroundColor: theme.palette[color].main,
    width: '100%',
    height: '100%',
}));
const SectionSubtitle = styled(Subtitle)(({ theme }) => ({
    position: 'relative',
    zIndex: 10,
    margin: '0px !important',
}));

export interface WorkSubsectionProps {
    readonly title: string;
    readonly color: Color;
    readonly position: 'left' | 'right';
}

export function WorkSubsection({
    title,
    color,
    position,
    children,
}: PropsWithChildren<WorkSubsectionProps>) {
    const justifyContent = position === 'left' ? 'flex-start' : 'flex-end';
    return (
        <>
            <Stack
                direction="row"
                justifyContent={justifyContent}
                alignItems="center"
            >
                <SectionSubtitle color="secondary">{title}</SectionSubtitle>
                <SectionSubtitleBackgroundWrapper position={position}>
                    <SectionSubtitleBackground color={color} />
                </SectionSubtitleBackgroundWrapper>
            </Stack>

            {children}
        </>
    );
}
