import React, { ReactElement } from 'react';
import { Circle } from '../shape';
import { Color, styled } from '../theme';
import { Text } from '../typography';

const SIZE = 318;

const Container = styled('div')<SuperCircleProps>(({ theme, transform }) => ({
    position: 'relative',
    height: SIZE,
    width: SIZE,
}));

const PrimaryCircle = styled(Circle)(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(2),
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    top: 0,
    transition: 'all 0.5s ease-in-out',
}));

const SecondaryCircle = styled(Circle)(({ theme }) => ({
    left: '3%',
}));

function toTextArray(input?: string | string[]): string[] | null {
    if (!input) {
        return null;
    }

    return Array.isArray(input) ? input : [input];
}

export interface SuperCircleProps {
    transform?: string;
    error?: boolean;
    text?: string | string[];
}

export function SuperCircle({
    text,
    error,
    ...props
}: SuperCircleProps): ReactElement {
    const bgColor = error ? 'red' : 'yellow';
    const textColor = error ? 'secondary' : 'primary';
    const textToDisplay = toTextArray(text);

    return (
        <Container {...props}>
            <PrimaryCircle position={'absolute'} color={bgColor} size={SIZE}>
                {textToDisplay
                    ? textToDisplay.map((t) => (
                          <Text align={'center'} color={textColor}>
                              {t}
                          </Text>
                      ))
                    : null}
            </PrimaryCircle>
            <SecondaryCircle
                position={'absolute'}
                color={'primary'}
                variant={'outline'}
                size={SIZE}
            />
        </Container>
    );
}
