import { Image, ImageProps } from '../image';
import React from 'react';
import { styled } from '../theme';

const PersonaImage = styled(Image)<ImageProps>(({ theme }) => ({
    clipPath: 'ellipse(43% 50% at 50% 50%)',
}));

export interface PersonaPictureProps {
    src: string;
    alt: string;
    maxWidth?: string;
}

export function PersonaPicture({ src, alt, maxWidth }: PersonaPictureProps) {
    return <PersonaImage src={src} alt={alt} maxWidth={maxWidth} />;
}
