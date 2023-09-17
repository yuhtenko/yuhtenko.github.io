import isNil from 'lodash/isNil';
import React, { MouseEvent, PropsWithChildren, useCallback } from 'react';
import { styled } from '../theme';

const Anchor = styled('a')(({ theme }) => ({
    cursor: 'pointer',
    userSelect: 'none',
}));

export interface ScrollAnchorProps {
    id?: string;
    to: string;
}

export function ScrollAnchor({
    id,
    children,
    to,
}: PropsWithChildren<ScrollAnchorProps>) {
    const handleClick = useCallback(
        (event: MouseEvent) => {
            event.preventDefault();

            const target = document.getElementById(to);

            if (!isNil(target)) {
                target.scrollIntoView();
            }
        },
        [to]
    );

    return (
        <Anchor id={id} onClick={handleClick}>
            {children}
        </Anchor>
    );
}
