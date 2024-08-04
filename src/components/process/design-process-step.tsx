import React, { ReactElement } from 'react';
import Stack, { StackProps } from '@mui/system/Stack';
import { StackList } from '../list';
import { Subtitle, Text } from '../typography';

export interface DesignProcessStepShapesProps {
    className?: string;
    shape?: ReactElement;
    icon?: ReactElement;
    position?: 'left' | 'right';
    align?: 'center' | 'left' | 'right';
}

function DesignProcessStepShapes({
    className,
    position = 'left',
    shape,
    icon,
}: DesignProcessStepShapesProps): ReactElement | null {
    let children;

    if (shape && icon) {
        children = position === 'left' ? [shape, icon] : [icon, shape];
    } else if (shape) {
        children = shape;
    } else if (icon) {
        children = icon;
    }

    if (children == null) {
        return null;
    }

    return (
        <Stack className={className} direction={'row'} spacing={1}>
            {children}
        </Stack>
    );
}

export interface DesignProcessStepProps extends DesignProcessStepShapesProps {
    title: string | ReactElement;
    actions: string[];
}

export function DesignProcessStep({
    title,
    actions,
    align,
    ...shapes
}: DesignProcessStepProps): ReactElement {
    let alignItems: StackProps['justifyContent'] = 'center';

    if (align === 'left') {
        alignItems = 'flex-start';
    } else if (align === 'right') {
        alignItems = 'flex-end';
    } else {
        alignItems = 'center';
    }

    return (
        <Stack
            direction={'column'}
            spacing={{ xs: 1, sm: 2 }}
            alignItems={alignItems}
        >
            <Stack
                direction={'column'}
                spacing={{ xs: 0, sm: 1 }}
                alignItems={alignItems}
            >
                <DesignProcessStepShapes {...shapes} />
                {typeof title === 'string' ? (
                    <Subtitle>{title}</Subtitle>
                ) : (
                    title
                )}
            </Stack>
            <StackList items={actions} align={alignItems} />
        </Stack>
    );
}
