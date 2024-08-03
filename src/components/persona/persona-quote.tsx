import { styled } from '../theme';
import { Text } from '../typography';
import React, { PropsWithChildren } from 'react';

const StyledQuote = styled(Text)(({ theme }) => ({
    display: 'inline-block',
    maxWidth: '428px',
    textWrap: 'wrap',
    opacity: 0.65,
    fontStyle: 'italic',
    ['&::before']: {
        content: "'“'",
    },
    ['&::after']: {
        content: "'”'",
    },
}));

export function PersonaQuote({ children }: PropsWithChildren) {
    return <StyledQuote weight="light">{children}</StyledQuote>;
}
