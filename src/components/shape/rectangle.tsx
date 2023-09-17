import { Theme, mapSize, styled, toColor } from '../theme';
import {
    DEFAULT_DIRECTION,
    DEFAULT_SIZE,
    ShapeDirection,
    ShapeProps,
    ShapeSize,
} from './shape';

const toRectangleSize = (
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
            default:
                return {
                    width: size,
                    height: size * 2,
                };
        }
    });
};

export const Rectangle = styled('div')<ShapeProps>(
    ({
        theme,
        direction = DEFAULT_DIRECTION,
        color,
        size = DEFAULT_SIZE,
        position,
        float,
    }) => ({
        float: float ?? 'left',
        position,
        backgroundColor: toColor(theme, color),
        ...toRectangleSize(theme, size, direction),
    })
);
