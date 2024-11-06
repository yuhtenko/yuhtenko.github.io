import React, { PropsWithChildren, ReactElement } from 'react';
import { Heading } from '../typography';
import Stack, { StackProps } from '@mui/system/Stack';

export interface SubSectionProps extends StackProps {
    heading: string;
}

export function SubSection({
    heading,
    children,
    ...rest
}: PropsWithChildren<SubSectionProps>): ReactElement {
    return (
        <Stack gap={1} {...rest}>
            <Heading noMargin size={'subheading2'} variant={'bold'}>
                {heading}
            </Heading>

            {children}
        </Stack>
    );
}
