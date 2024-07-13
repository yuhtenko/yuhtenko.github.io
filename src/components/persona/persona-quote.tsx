import { styled } from '../theme';
import { Text } from '../typography';
import React, { PropsWithChildren } from 'react';

const StyledQuote = styled(Text)(({ theme }) => ({
    // fontWeight: theme.typography.fontWeight.light,
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
