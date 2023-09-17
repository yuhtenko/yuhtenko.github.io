import { styled } from '../../theme';

export interface TextInputProps {
    id: string;
    placeholder: string;
    name: string;
}

export const TextInput = styled('input')<TextInputProps>(({ theme }) => ({
    minHeight: 50,
    width: '100%',
    resize: 'none',
    border: `1px solid ${theme.palette.black.main}`,
    color: theme.palette.black.main,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    outlineColor: theme.palette.blue.main,
    ...theme.typography.variant.caption1,
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.variant.caption2,
    },
    '&.error': {
        borderColor: theme.palette.red.main,
    },
}));
