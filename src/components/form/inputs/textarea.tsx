import { styled } from '../../theme';

export interface TextareaInputProps {
    id: string;
    placeholder: string;
    name: string;
}

export const Textarea = styled('textarea')<TextareaInputProps>(({ theme }) => ({
    minHeight: 104,
    width: '100%',
    resize: 'none',
    border: `1px solid ${theme.palette.black.main}`,
    color: theme.palette.black.main,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    ...theme.typography.variant.caption1,
    [theme.breakpoints.down('sm')]: {
        ...theme.typography.variant.caption2,
    },
}));
