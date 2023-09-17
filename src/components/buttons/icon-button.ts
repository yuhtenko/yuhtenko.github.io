import { CSSProperties } from 'react';
import { styled } from '../theme';
import { Button, ButtonProps } from './button';

export interface ToggleTextButtonProps extends ButtonProps {
    readonly toggledText: string;
    readonly toggleStyle?: CSSProperties;
}

export const IconButton = styled(Button)(({ theme }) => ({}));
