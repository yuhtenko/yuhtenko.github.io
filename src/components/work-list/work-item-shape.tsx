import React from 'react';
import Box from '@mui/system/Box';
import {
    HalfCircle,
    Rectangle,
    ShapeComponent,
    ShapeDirection,
    ShapeProps,
    ShapeSize,
    ShapeType,
} from '../shape';
import { mapSize, styled, Theme, toColor } from '../theme';

const toTriangleContainerMeasure = (
    theme: Theme,
    shapeSize: ShapeSize,
    direction: ShapeDirection
) => {
    return mapSize(theme, shapeSize, (size) => {
        const totalSize = size * 2;
        return {
            width: totalSize,
            height: totalSize,
        };
    });
};

const toTriangleInnerMeasure = (direction: ShapeDirection) => {
    switch (direction) {
        case 'left':
        case 'right':
            return {
                height: '200%',
                width: '100%',
            };
        default: {
            return {
                width: '200%',
                height: '100%',
            };
        }
    }
};

const TriangleBox = styled(Box)<ShapeProps>(
    ({ theme, position, float, direction = 'right', size = 40 }) => ({
        float: float ?? 'left',
        right: -size as number,
        position: position ?? 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection:
            direction === 'left' || direction === 'right' ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        ...toTriangleContainerMeasure(theme, size, direction),
    })
);

const RightBox = styled(Box)<ShapeProps>(
    ({ theme, color, direction = 'right' }) => ({
        position: 'relative',
        backgroundColor: toColor(theme, color),
        display: 'inline-block',
        transform: 'rotate(45deg)',
        transformOrigin: 'bottom left',
        ...toTriangleInnerMeasure(direction),
    })
);

const LeftBox = styled(Box)<ShapeProps>(
    ({ theme, color, direction = 'right' }) => ({
        position: 'relative',
        backgroundColor: toColor(theme, color),
        display: 'inline-block',
        transform: 'rotate(-45deg)',
        transformOrigin: 'top left',
        ...toTriangleInnerMeasure(direction),
    })
);
export const WorkItemTriangle = ({
    className,
    float,
    position,
    ...rest
}: ShapeProps) => {
    return (
        <TriangleBox
            className={className}
            float={float}
            position={position}
            {...rest}
        >
            <RightBox className={'shape-triangle-right'} {...rest} />
            <LeftBox className={'shape-triangle-left'} {...rest} />
        </TriangleBox>
    );
};

export const WorkItemHalfCircle = HalfCircle;

export const WorkItemRectangle = Rectangle;

export function getWorkItemShape(shape: ShapeType): ShapeComponent {
    switch (shape) {
        case 'rectangle':
            return WorkItemRectangle;
        case 'triangle':
            return WorkItemTriangle;
        case 'half-circle':
            return WorkItemHalfCircle;
        default:
            return WorkItemRectangle;
    }
}
