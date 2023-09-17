import React, { ReactElement, ReactNode } from 'react';
import { Theme, styled } from '../theme';

const QuoteParagraph = styled('p')(({ theme }) => {
    const t = theme as any as Theme;

    return {
        textAlign: 'center',
        ...t.typography.variant.quote1,
        [t.breakpoints.down('sm')]: {
            ...t.typography.variant.quote2,
        },
        [t.breakpoints.down(376)]: {
            ...t.typography.variant.quote3,
        },
    };
});

const QuoteCite = styled('footer')(({ theme }) => {
    const t = theme as any as Theme;

    return {
        float: 'right',
        ...t.typography.variant.quote1,
        fontStyle: 'normal',
        [t.breakpoints.down('md')]: {
            ...t.typography.variant.quote2,
            fontStyle: 'normal',
        },
        [t.breakpoints.down(376)]: {
            ...t.typography.variant.quote3,
            fontStyle: 'normal',
        },
    };
});

const Blockquote = styled('blockquote')(() => ({
    maxWidth: 640,
    margin: 0,
}));

export interface QuoteProps {
    author: string;
    children: ReactNode;
}

export function Quote({ author, children }: QuoteProps): ReactElement {
    return (
        <Blockquote>
            <QuoteParagraph>{children}</QuoteParagraph>
            <QuoteCite>—{author}</QuoteCite>
        </Blockquote>
    );
}
