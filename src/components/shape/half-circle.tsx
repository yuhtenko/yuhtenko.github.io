import { Theme, mapSize, mergeCss, styled, toColor } from '../theme';
import {
    DEFAULT_COLOR,
    DEFAULT_DIRECTION,
    DEFAULT_SIZE,
    ShapeDirection,
    ShapeProps,
    ShapeSize,
} from './shape';

const toHalfCircleSize = (
    theme: Theme,
    shapeSize: ShapeSize,
    direction: ShapeDirection
) => {
    return mapSize(theme, shapeSize, (size) => {
        switch (direction) {
            case 'up':
                return {
                    width: size * 2,
                    height: size,
                };
            case 'down':
                return {
                    width: size * 2,
                    height: size,
                };
            case 'left':
                return {
                    width: size,
                    height: size * 2,
                };
            case 'right':
                return {
                    width: size,
                    height: size * 2,
                };
            default:
                return {
                    width: size * 2,
                    height: size,
                };
        }
    });
};

const toHalfCircleBorderRadius = (
    theme: Theme,
    shapeSize: ShapeSize,
    direction: ShapeDirection
) => {
    return mapSize(theme, shapeSize, (size) => {
        switch (direction) {
            case 'right':
                return {
                    borderTopRightRadius: size,
                    borderBottomRightRadius: size,
                };
            case 'left':
                return {
                    borderTopLeftRadius: size,
                    borderBottomLeftRadius: size,
                };
            case 'up':
                return {
                    borderTopLeftRadius: size,
                    borderTopRightRadius: size,
                };
            case 'down':
                return {
                    borderBottomLeftRadius: size,
                    borderBottomRightRadius: size,
                };
            default:
                return {};
        }
    });
};

export const HalfCircle = styled('div')<ShapeProps>(
    ({
        theme,
        direction = DEFAULT_DIRECTION,
        color = DEFAULT_COLOR,
        size = DEFAULT_SIZE,
        position,
        float,
        zIndex,
    }) => ({
        zIndex,
        position,
        float: float ?? 'left',
        backgroundColor: toColor(theme, color),
        ...mergeCss(
            toHalfCircleSize(theme, size, direction),
            toHalfCircleBorderRadius(theme, size, direction)
        ),
    })
);
