import { Image, ImageProps } from '../image';
import React from 'react';
import { styled } from '../theme';

const PersonaImage = styled(Image)<ImageProps>(({ theme }) => ({
    clipPath: 'ellipse(43% 50% at 50% 50%)',
    objectFit: 'cover',
}));

export interface PersonaPictureProps {
    src: string;
    alt: string;
    maxWidth?: string;
    maxHeight?: string;
    maxSizes?: ImageProps['maxSizes'];
}

export function PersonaPicture({
    src,
    alt,
    maxWidth,
    maxHeight,
    maxSizes,
}: PersonaPictureProps) {
    return (
        <PersonaImage
            src={src}
            alt={alt}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            maxSizes={maxSizes}
        />
    );
}
