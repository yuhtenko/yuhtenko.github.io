import React, { PropsWithChildren, ReactElement } from 'react';
import Box from '@mui/system/Box';
import { Heading } from '../typography';

export interface SubSectionProps {
    heading: string;
}

export function SubSection({
    heading,
    children,
}: PropsWithChildren<SubSectionProps>): ReactElement {
    return (
        <Box>
            <Heading size={'subheading2'} variant={'bold'}>
                {heading}
            </Heading>

            {children}
        </Box>
    );
}
