import { mapSize, styled, toColor } from '../theme';
import { DEFAULT_COLOR, DEFAULT_SIZE, ShapeProps } from './shape';

export const Circle = styled('div')<ShapeProps>(
    ({
        theme,
        color = DEFAULT_COLOR,
        size = DEFAULT_SIZE,
        position,
        float,
        zIndex,
        variant,
    }) => ({
        zIndex,
        position,
        float: float ?? 'left',
        backgroundColor:
            variant === 'outline' ? 'transparent' : toColor(theme, color),
        border:
            variant === 'outline'
                ? `1px solid ${toColor(theme, color)}`
                : 'none',
        borderRadius: '50%',
        ...mapSize(theme, size, (size) => ({
            width: size,
            height: size,
        })),
    })
);
