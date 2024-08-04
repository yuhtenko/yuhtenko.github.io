import React from 'react';
import { styled } from '../theme';
import { BorderSide, toBorder } from './border';

export interface ImageProps {
    className?: string;
    src: string;
    alt?: string;
    maxWidth?: string;
    withBorder?: boolean | BorderSide[];
    style?: React.CSSProperties;
}

export const Image = styled('img')<ImageProps>(
    ({ theme, withBorder, maxWidth }) => ({
        objectFit: 'contain',
        maxWidth: maxWidth || '100%',
        height: 'auto',
        display: 'block',
        verticalAlign: 'middle',
        ...toBorder(theme, withBorder),
        ...(maxWidth && { width: '100%', height: 'auto' }),
    })
);
