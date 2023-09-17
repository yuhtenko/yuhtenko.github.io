import React from 'react';
import Stack from '@mui/system/Stack';
import { WorkItem, WorkItemData } from './work-item';

export interface WorkListProps {
    content: WorkItemData[];
    className?: string;
}

export function WorkList({ content, className }: WorkListProps) {
    return (
        <Stack className={className} direction="column" spacing={4}>
            {content?.map((item, idx) => {
                return (
                    <WorkItem
                        key={item.path}
                        {...item}
                        number={`0${idx + 1}`}
                    />
                );
            })}
        </Stack>
    );
}
