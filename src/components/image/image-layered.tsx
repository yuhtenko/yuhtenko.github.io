import React, { CSSProperties, PropsWithChildren, ReactElement } from 'react';
import { styled } from '../theme';
import { BorderSide, toBorder } from './border';
import { Image, ImageProps } from './image';

const LayeredImageRoot = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
}));

const LayeredImageLayer = styled('div')<CSSProperties>(
    ({ theme, justifyContent }) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent,
    })
);

export interface LayeredImageProps extends ImageProps {
    justifyContent?: CSSProperties['justifyContent'];
}

export function LayeredImage({
    className,
    src,
    justifyContent = 'flex-start',
    withBorder,
    children,
}: PropsWithChildren<LayeredImageProps>): ReactElement {
    return (
        <LayeredImageRoot className={className}>
            <Image src={src} withBorder={withBorder} />
            <LayeredImageLayer justifyContent={justifyContent}>
                {children}
            </LayeredImageLayer>
        </LayeredImageRoot>
    );
}

export interface ImageLayerProps {
    className?: string;
    withBorder?: boolean | BorderSide[];
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
}

const ImageLayerRoot = styled('div')<ImageLayerProps>(
    ({ theme, top, right, bottom, left, withBorder }) => ({
        position: 'relative',
        overflow: 'hidden',
        top,
        bottom,
        right,
        left,
        ...toBorder(theme, withBorder),
    })
);

export function ImageLayer({
    children,
    ...rest
}: PropsWithChildren<ImageLayerProps>): ReactElement {
    return <ImageLayerRoot {...rest}>{children}</ImageLayerRoot>;
}
