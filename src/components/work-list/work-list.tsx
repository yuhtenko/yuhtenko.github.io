import React from 'react';
import Stack from '@mui/system/Stack';
import { WorkItem } from './work-item';
import { Project } from '../../common/project';

export interface WorkListProps {
    projects: Project[];
    className?: string;
}

export function WorkList({ projects, className }: WorkListProps) {
    return (
        <Stack className={className} direction="column" spacing={4}>
            {projects?.map((item, idx) => {
                return <WorkItem key={item.id} project={item} />;
            })}
        </Stack>
    );
}
