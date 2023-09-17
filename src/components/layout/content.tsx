import React, { PropsWithChildren, ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import { useTheme } from '../theme';

export type ContentSpacing = 'home' | 'projects';

export interface ContentProps {
    spacing?: ContentSpacing;
}

export function Content({
    spacing = 'home',
    children,
}: PropsWithChildren<ContentProps>): ReactElement {
    const theme = useTheme();
    const [md, xs] =
        theme.sizes.spacing[spacing === 'home' ? 'section1' : 'section2'];

    return (
        <Stack
            direction="column"
            alignItems={'stretch'}
            spacing={{
                md,
                xs,
            }}
        >
            {children}
        </Stack>
    );
}
