import { Color, styled, toColor } from '../theme';
import React, { PropsWithChildren, ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import { Subtitle } from '../typography';

export interface TileProps {
    color: Color;
    title: string | ReactElement;
    fullHeight?: boolean;
    fullWidth?: boolean;
}

const StyledStack = styled(Stack)<{ color: Color }>(({ theme, color }) => ({
    borderRadius: theme.shape.borderRadius,
    border: `none`,
    backgroundColor: toColor(theme, color),
    '& > *': {
        color: theme.palette.secondary.main,
    },
}));

export function Tile({
    title,
    color,
    fullHeight,
    fullWidth,
    children,
}: PropsWithChildren<TileProps>): ReactElement {
    return (
        <StyledStack
            color={color}
            padding={2}
            height={fullHeight ? '100%' : undefined}
            width={fullWidth ? '100%' : undefined}
        >
            {typeof title === 'string' ? (
                <Subtitle color="secondary" spacing={1}>
                    {title}
                </Subtitle>
            ) : (
                title
            )}
            {children}
        </StyledStack>
    );
}
