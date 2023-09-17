import { ComponentType } from 'react';
import { MUIStyledCommonProps } from '@mui/system';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';
import { Color, Theme } from '../theme';

export const DEFAULT_COLOR: Color = 'primary';

export const DEFAULT_SIZE: ShapeSize = 40;

export const DEFAULT_VARIANT: ShapeVariant = 'normal';

export const DEFAULT_DIRECTION: ShapeDirection = 'up';

export type ShapeDirection = 'left' | 'right' | 'up' | 'down';

export type ShapePosition = 'absolute' | 'relative';

export type ShapeVariant = 'normal' | 'outline';

export type ShapeBreakpoint = Breakpoint | 'default';

export type ShapeSize = number | Partial<Record<ShapeBreakpoint, number>>;

export interface ShapeProps {
    className?: string;
    direction?: ShapeDirection;
    float?: 'left' | 'right';
    color?: Color;
    position?: ShapePosition;
    variant?: ShapeVariant;
    size?: ShapeSize;
    zIndex?: number;
}

export type ShapeComponent = ComponentType<
    ShapeProps & MUIStyledCommonProps<Theme>
>;
