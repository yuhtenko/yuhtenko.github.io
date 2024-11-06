import { Color, mapSize, styled, Theme, toColor } from '../theme';
import {
    DEFAULT_COLOR,
    DEFAULT_DIRECTION,
    DEFAULT_SIZE,
    DEFAULT_VARIANT,
    ShapeDirection,
    ShapeProps,
    ShapeSize,
} from './shape';

const toNormalTriangleBorder = (
    theme: Theme,
    shapeSize: ShapeSize,
    color: Color,
    direction: ShapeDirection
) => {
    const resolveColor = toColor(theme, color);

    return mapSize(theme, shapeSize, (size) => {
        switch (direction) {
            case 'up':
                return {
                    borderLeft: `${size}px solid transparent`,
                    borderRight: `${size}px solid transparent`,
                    borderBottom: `${size}px solid ${resolveColor}`,
                };
            case 'down':
                return {
                    borderLeft: `${size}px solid transparent`,
                    borderRight: `${size}px solid transparent`,
                    borderTop: `${size}px solid ${resolveColor}`,
                };
            case 'left':
                return {
                    borderTop: `${size}px solid transparent`,
                    borderBottom: `${size}px solid transparent`,
                    borderRight: `${size}px solid ${resolveColor}`,
                };
            case 'right':
                return {
                    borderTop: `${size}px solid transparent`,
                    borderBottom: `${size}px solid transparent`,
                    borderLeft: `${size}px solid ${resolveColor}`,
                };
            default:
                return {
                    borderLeft: `${size}px solid transparent`,
                    borderRight: `${size}px solid transparent`,
                    borderBottom: `${size}px solid ${resolveColor}`,
                };
        }
    });
};

const toOutlineTriangleContainerBorder = (
    theme: Theme,
    color: Color,
    direction?: ShapeDirection
) => {
    const resolvedColor = toColor(theme, color);

    switch (direction) {
        case 'up':
            return {
                borderLeft: `1px solid transparent`,
                borderRight: `1px solid transparent`,
                borderBottom: `1px solid ${resolvedColor}`,
            };
        case 'down':
            return {
                borderLeft: `1px solid transparent`,
                borderRight: `1px solid transparent`,
                borderTop: `1px solid ${resolvedColor}`,
            };
        case 'left':
            return {
                borderTop: `1px solid transparent`,
                borderBottom: `1px solid transparent`,
                borderRight: `1px solid ${resolvedColor}`,
            };
        case 'right':
            return {
                borderTop: `1px solid transparent`,
                borderBottom: `1px solid transparent`,
                borderLeft: `1px solid ${resolvedColor}`,
            };
        default:
            return {
                borderBottom: `1px solid ${resolvedColor}`,
            };
    }
};

const toOutlineTriangleContainerMeasure = (
    theme: Theme,
    shapeSize: ShapeSize,
    direction: ShapeDirection
) => {
    return mapSize(theme, shapeSize, (size) => {
        const baseLength = size / Math.sqrt(2);

        switch (direction) {
            case 'up':
                return {
                    width: size,
                    paddingTop: baseLength,
                };
            case 'down':
                return {
                    width: size,
                    paddingBottom: baseLength,
                };
            case 'left':
                return {
                    height: size,
                    paddingRight: baseLength,
                };
            case 'right':
                return {
                    height: size,
                    paddingLeft: baseLength,
                };
            default: {
                return {
                    paddingRight: baseLength,
                    height: size,
                };
            }
        }
    });
};

const toOutlineTriangleBorder = (
    theme: Theme,
    color: Color,
    direction?: ShapeDirection
) => {
    const resolvedColor = toColor(theme, color);
    switch (direction) {
        case 'up':
            return {
                borderLeft: `1px solid ${resolvedColor}`,
                borderTop: `1px solid ${resolvedColor}`,
            };
        case 'left':
            return {
                borderBottom: `1px solid ${resolvedColor}`,
                borderLeft: `1px solid ${resolvedColor}`,
            };
        case 'right':
            return {
                borderTop: `1px solid ${resolvedColor}`,
                borderRight: `1px solid ${resolvedColor}`,
            };
        default:
            return {
                borderBottom: `1px solid ${resolvedColor}`,
                borderRight: `1px solid ${resolvedColor}`,
            };
    }
};

const toOutlineTriangleTransform = (direction?: ShapeDirection) => {
    switch (direction) {
        case 'up':
            return {
                transform: 'rotate(45deg)',
                transformOrigin: 'bottom left',
            };
        case 'left':
            return {
                transform: 'rotate(45deg)',
                transformOrigin: 'bottom right',
            };
        case 'right':
            return {
                transform: 'rotate(45deg)',
                transformOrigin: 'top left',
            };
        default:
            return {
                transform: 'rotate(45deg)',
                transformOrigin: 'top right',
            };
    }
};

const toOutlineTrianglePosition = (direction?: ShapeDirection) => {
    switch (direction) {
        case 'up':
            return {
                top: '1px',
                right: '1px',
            };
        case 'right':
            return {
                bottom: '1px',
                right: '1px',
            };
        case 'left':
            return {
                top: '1px',
                left: '1px',
            };
        default:
            return {
                bottom: '1px',
                left: '1px',
            };
    }
};

export const Triangle = styled('div')<ShapeProps>(
    ({
        theme,
        color = DEFAULT_COLOR,
        direction = DEFAULT_DIRECTION,
        size = DEFAULT_SIZE,
        position = 'relative',
        variant = DEFAULT_VARIANT,
        float,
    }) => ({
        float,
        position,
        ...(variant === 'normal' && {
            width: 0,
            height: 0,
            ...toNormalTriangleBorder(theme, size, color, direction),
        }),
        ...(variant === 'outline' && {
            ...toOutlineTriangleContainerMeasure(theme, size, direction),
            overflow: `hidden`,
            ...toOutlineTriangleContainerBorder(theme, color, direction),
            '&::before': {
                content: '""',
                boxSizing: 'border-box',
                position: 'absolute',
                width: '100%',
                height: '100%',
                ...toOutlineTrianglePosition(direction),
                ...toOutlineTriangleBorder(theme, color, direction),
                ...toOutlineTriangleTransform(direction),
            },
        }),
    })
);
