import React from 'react';
import { styled, Theme } from '../theme';
import { BorderSide, toBorder } from './border';
import { CSSObject } from '@mui/styled-engine';

export type ImageSize = [number, number];

export type ImageSizeBreakpoints = {
    xs?: ImageSize;
    sm?: ImageSize;
    md?: ImageSize;
    lg?: ImageSize;
    xl?: ImageSize;
};

export interface ImageProps {
    className?: string;
    src: string;
    alt?: string;
    maxWidth?: string;
    maxHeight?: string;
    withBorder?: boolean | BorderSide[];
    style?: React.CSSProperties;
    maxSizes?: ImageSize | ImageSizeBreakpoints;
}

function toBreakpointSize(obj: CSSObject, size: ImageSize, breakpoint: string) {
    obj[breakpoint] = {
        maxWidth: size[0],
        maxHeight: size[1],
    };
}

function toSize(
    theme: Theme,
    size?: ImageSize | ImageSizeBreakpoints
): CSSObject | null {
    if (size == null) {
        return null;
    }

    if (Array.isArray(size)) {
        return {
            maxWidth: size[0],
            maxHeight: size[1],
        };
    }

    const obj: CSSObject = {};

    if (size.xs) {
        toBreakpointSize(obj, size.xs, theme.breakpoints.down('xs'));
    }

    if (size.sm) {
        toBreakpointSize(obj, size.sm, theme.breakpoints.down('sm'));
    }

    if (size.md) {
        toBreakpointSize(obj, size.md, theme.breakpoints.down('md'));
    }

    if (size.lg) {
        toBreakpointSize(obj, size.lg, theme.breakpoints.down('lg'));
    }

    if (size.xl) {
        toBreakpointSize(obj, size.xl, theme.breakpoints.down('xl'));
    }

    return obj;
}

export const Image = styled('img')<ImageProps>(
    ({ theme, withBorder, maxWidth, maxHeight, maxSizes }) => ({
        objectFit: 'contain',
        maxWidth: maxWidth || '100%',
        maxHeight: maxHeight || '100%',
        height: 'auto',
        display: 'block',
        verticalAlign: 'middle',
        ...toBorder(theme, withBorder),
        ...(maxWidth && { width: '100%', height: 'auto' }),
        ...toSize(theme, maxSizes),
    })
);
