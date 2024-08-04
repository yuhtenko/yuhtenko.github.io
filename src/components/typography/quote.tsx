import React, { ReactElement, ReactNode } from 'react';
import { Theme, styled } from '../theme';
import { SxProps } from '@mui/system';

const QuoteParagraph = styled('p')(({ theme }) => {
    const t = theme as any as Theme;

    return {
        textAlign: 'right',
        ...t.typography.variant.quote1,
        [t.breakpoints.down('sm')]: {
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
        [t.breakpoints.down('sm')]: {
            ...t.typography.variant.quote3,
            fontStyle: 'normal',
        },
    };
});

const Blockquote = styled('blockquote')(({ theme }) => ({
    maxWidth: 640,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
}));

export interface QuoteProps {
    author?: string;
    children: ReactNode;
    sx?: SxProps;
}

export function Quote({ author, sx, children }: QuoteProps): ReactElement {
    return (
        <Blockquote sx={sx}>
            <QuoteParagraph>{children}</QuoteParagraph>
            {author && <QuoteCite>—{author}</QuoteCite>}
        </Blockquote>
    );
}
