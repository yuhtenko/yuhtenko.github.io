import React from 'react';
import { styled } from '../theme';

export interface ImageMaskProps {
    className?: string;
    width?: string;
    height?: string;
    offsetX?: string;
    offsetY?: string;
}

export const ImageMask = styled('div', {
    shouldForwardProp: (prop) => prop !== 'offsetX' && prop !== 'offsetY',
})<ImageMaskProps>(({ theme, width, height, offsetX = 0, offsetY = 0 }) => ({
    overflow: 'hidden',
    position: 'relative',
    width,
    height,

    '& img': {
        position: 'relative',
        ...(offsetX ? { left: `${offsetX}` } : undefined),
        ...(offsetY ? { top: `${offsetY}` } : undefined),
    },
}));
