import React, { ReactElement } from 'react';
import { styled } from '../theme';

export interface NavMenuButtonProps {
    variant: 'open' | 'close';
    onClick?: () => void;
}

const Wrapper = styled('div')(({ theme }) => ({
    cursor: 'pointer',
}));

export function NavMenuButton({
    variant,
    onClick,
}: NavMenuButtonProps): ReactElement {
    let icon;

    if (variant === 'open') {
        icon = (
            <svg
                width="30"
                height="26"
                strokeWidth="2px"
                strokeLinecap="round"
                stroke="white"
            >
                <path d="M 1 1 H 29" />
                <path d="M 1 13 H 29" />
                <path d="M 1 25 H 29" />
            </svg>
        );
    } else {
        icon = (
            <svg
                width="30"
                height="26"
                strokeWidth="2"
                strokeLinecap="round"
                stroke="white"
                viewBox="0 0 30 26"
            >
                <path d="M 1 1 L 29 25" />
                <path d="M 29 1 L 1 25" />
            </svg>
        );
    }

    return <Wrapper onClick={onClick}>{icon}</Wrapper>;
}
