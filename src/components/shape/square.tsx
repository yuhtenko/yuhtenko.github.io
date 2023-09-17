import { mapSize, styled, toColor } from '../theme';
import { ShapeProps } from './shape';

export interface SquareProps extends ShapeProps {
    weight?: 'normal' | 'bold';
}

export const Square = styled('div')<SquareProps>(
    ({ theme, variant, color, size = 40, weight = 'normal' }) => ({
        display: 'inline-block',
        backgroundColor:
            variant === 'outline' ? 'transparent' : toColor(theme, color),
        border: `${weight === 'normal' ? 1 : 2}px solid ${toColor(
            theme,
            color
        )}`,
        ...mapSize(theme, size, (size) => ({
            width: size,
            height: size,
        })),
    })
);
