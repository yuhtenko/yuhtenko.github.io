import React, { ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import { List } from '../list';
import { Subtitle } from '../typography';

export interface DesignProcessStepShapesProps {
    className?: string;
    shape: ReactElement;
    icon: ReactElement;
    position: 'left' | 'right';
}

function DesignProcessStepShapes({
    className,
    position,
    shape,
    icon,
}: DesignProcessStepShapesProps): ReactElement {
    const children = position === 'left' ? [shape, icon] : [icon, shape];

    return (
        <Stack className={className} direction={'row'} spacing={1}>
            {children}
        </Stack>
    );
}

export interface DesignProcessStepProps extends DesignProcessStepShapesProps {
    title: string;
    actions: string[];
}

export function DesignProcessStep({
    title,
    actions,
    ...shapes
}: DesignProcessStepProps): ReactElement {
    return (
        <Stack direction={'column'} spacing={2} alignItems={'center'}>
            <Stack direction={'column'} spacing={1}>
                <DesignProcessStepShapes {...shapes} />
                <Subtitle>{title}</Subtitle>
            </Stack>
            <List items={actions} align={'center'} />
        </Stack>
    );
}
