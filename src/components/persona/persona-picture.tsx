import { Image } from '../image';
import React from 'react';
import { styled } from '../theme';

const PersonaImage = styled(Image)(({ theme }) => ({
    clipPath: 'ellipse(43% 50% at 50% 50%)',
}));

export interface PersonaPictureProps {
    src: string;
    alt: string;
    size?: number;
}

export function PersonaPicture({ src, alt, size }: PersonaPictureProps) {
    return <PersonaImage src={src} alt={alt} />;
}
