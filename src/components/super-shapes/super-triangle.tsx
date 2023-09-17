import * as React from 'react';
import { Triangle } from '../shape';
import { styled } from '../theme';

const SIZE = 800;

const Container = styled('div')<SuperTriangleProps>(({ theme, transform }) => ({
    position: 'relative',
    height: SIZE,
    transform,
}));

const PrimaryTriangle = styled(Triangle)(({ theme }) => ({
    top: 0,
    zIndex: 10,
}));

const SecondaryTriangle = styled(Triangle)(({ theme }) => ({
    transform: 'rotate(315deg)',
    bottom: 0,
}));

export interface SuperTriangleProps {
    transform?: string;
}

export function SuperTriangle(props: SuperTriangleProps) {
    return (
        <Container {...props}>
            <PrimaryTriangle
                direction="right"
                color="black"
                variant="outline"
                position="absolute"
                size={SIZE}
            />
            <SecondaryTriangle
                direction="down"
                color="blue"
                position="absolute"
                size={200}
            />
        </Container>
    );
}
