import React, { PropsWithChildren, ReactElement } from 'react';
import Box, { BoxProps } from '@mui/system/Box';
import { Heading } from '../typography';

export interface SubSectionProps extends BoxProps {
    heading: string;
}

export function SubSection({
    heading,
    children,
    ...rest
}: PropsWithChildren<SubSectionProps>): ReactElement {
    return (
        <Box {...rest}>
            <Heading size={'subheading2'} variant={'bold'}>
                {heading}
            </Heading>

            {children}
        </Box>
    );
}
