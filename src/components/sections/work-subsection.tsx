import React, { PropsWithChildren } from 'react';
import { Color, styled } from '../theme';
import { Heading, HeadingProps, Subtitle, SubtitleProps } from '../typography';
import Stack from '@mui/system/Stack';

export type Position = 'left' | 'right';

const BackgroundExtenderWrapper = styled('div')<{
    readonly position: 'left' | 'right';
}>(({ theme, position }) => ({
    position: 'absolute',
    height: '36px',
    width: position === 'left' ? '30%' : '25%',
    ...(position === 'left' ? { left: 0 } : { right: 0 }),
    [theme.breakpoints.down('sm')]: {
        height: '33px',
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

interface TitleProps extends PropsWithChildren<SubtitleProps> {
    readonly backgroundColor: Color;
    readonly position: Position;
}

const Title = styled(Subtitle)<TitleProps>(({
    theme,
    backgroundColor,
    position,
}) => {
    const property = position === 'left' ? 'paddingRight' : 'paddingLeft';

    return {
        position: 'relative',
        zIndex: 10,
        margin: '0px !important',
        backgroundColor: theme.palette[backgroundColor].main,
        [property]: theme.spacing(8),
    };
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
        <Stack marginBottom={5} gap={2}>
            <Stack
                direction="row"
                justifyContent={justifyContent}
                alignItems="center"
            >
                <Title
                    color="secondary"
                    position={position}
                    backgroundColor={color}
                >
                    {title}
                </Title>
                <BackgroundExtenderWrapper position={position}>
                    <BackgroundExtender color={color} />
                </BackgroundExtenderWrapper>
            </Stack>

            {children}
        </Stack>
    );
}
