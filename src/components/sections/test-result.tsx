import React, { ReactElement } from 'react';
import { Paragraph, Text } from '../typography';
import Stack from '@mui/system/Stack';

export interface TestResultProps {
    readonly className?: string;
    readonly title: string;
    readonly before?: ReactElement;
    readonly after?: ReactElement;
}

export const TestResult = ({ title, before, after }: TestResultProps) => (
    <>
        <Paragraph>{title}</Paragraph>
        <Stack
            direction={'row'}
            alignItems={'flex-start'}
            justifyContent={'center'}
            marginTop={3}
            marginBottom={3}
            gap={2}
        >
            <Stack direction={'column'} gap={0} alignItems={'center'}>
                <Text>Before</Text>
                {before}
            </Stack>
            <Stack direction={'column'} gap={0} alignItems={'center'}>
                <Text>After</Text>
                {after}
            </Stack>
        </Stack>
    </>
);
