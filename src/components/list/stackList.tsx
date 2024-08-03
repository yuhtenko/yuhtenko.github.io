import React, { ReactElement } from 'react';
import { CSSObject } from '@mui/styled-engine';
import Stack, { StackProps } from '@mui/system/Stack';
import { Text } from '../typography';

function toTextAlignment(
    align?: StackProps['justifyContent']
): CSSObject['textAlign'] | undefined {
    switch (align) {
        case 'flex-start':
            return 'left';
        case 'center':
            return 'center';
        case 'flex-end':
            return 'right';
        default:
            return undefined;
    }
}

export interface StackListProps {
    align?: StackProps['justifyContent'];
    items: Array<string | ReactElement>;
}

export function StackList({ items, align }: StackListProps): ReactElement {
    return (
        <>
            <Stack
                spacing={1}
                direction="column"
                alignItems={align}
                textAlign={toTextAlignment(align)}
            >
                {items.map((item, idx) => {
                    const key = React.isValidElement(item)
                        ? item.key || idx.toString()
                        : typeof item === 'string'
                          ? item
                          : idx.toString();

                    return React.isValidElement(item) ? (
                        item
                    ) : (
                        <Text key={key}>{item}</Text>
                    );
                })}
            </Stack>
        </>
    );
}
