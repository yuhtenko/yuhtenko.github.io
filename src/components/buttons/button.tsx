import { HTMLProps } from 'react';
import { styled } from '../theme';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    loading?: boolean;
}

export const Button = styled('button')<ButtonProps>(({ theme }) => ({
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.black.main}`,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '10px',
    maxWidth: 375,
    width: '100%',
    height: 60,
    padding: 0,
    margin: 0,
    fontFamily: theme.typography.fontFamily,
    cursor: 'pointer',
    userSelect: 'none',
    ...theme.typography.variant.button1,
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.variant.button2,
    },
    '&:hover:not(:disabled)': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
    '&:disabled': {
        color: theme.palette.grey.main,
        cursor: 'unset',
    },
}));
