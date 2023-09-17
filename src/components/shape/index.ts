import { Circle } from './circle';
import { HalfCircle } from './half-circle';
import { Rectangle } from './rectangle';
import { ShapeComponent } from './shape';
import { Square } from './square';
import { Triangle } from './triangle';

export * from './half-circle';
export * from './rectangle';
export * from './triangle';
export * from './shape';
export * from './square';
export * from './circle';

export type ShapeType =
    | 'half-circle'
    | 'circle'
    | 'triangle'
    | 'rectangle'
    | 'square';

export function getShape(type: ShapeType): ShapeComponent {
    switch (type) {
        case 'circle':
            return Circle;
        case 'half-circle':
            return HalfCircle;
        case 'rectangle':
            return Rectangle;
        case 'triangle':
            return Triangle;

        default:
            return Square;
    }
}
