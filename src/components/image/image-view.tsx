import { Image, ImageProps } from './image';
import { PhotoView } from 'react-photo-view';
import React from 'react';
import { styled } from '../theme';

const StyledImage = styled(Image)({
    cursor: 'zoom-in',
});

export interface ImageViewProps extends ImageProps {}

export function ImageView({ src, ...rest }: ImageViewProps) {
    return (
        <PhotoView src={src}>
            <StyledImage src={src} {...rest} />
        </PhotoView>
    );
}
