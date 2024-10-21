import { Color, styled, Theme } from '../theme';
import { Text } from '../typography';
import React, { ReactElement, ReactNode } from 'react';
import { SxProps } from '@mui/system';

type ListStyler = (props: { theme: Theme } & Omit<ListProps, 'items'>) => any;

const listStyler: ListStyler = ({ theme, variant, spacing }) => ({
    fontSize: '14px',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingLeft: variant === 'none' ? 0 : theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        paddingLeft: variant === 'none' ? 0 : theme.spacing(2),
    },

    '& li:not(:last-child)': {
        marginBottom: theme.spacing(spacing ?? 1),
    },
});

const UnorderedList = styled('ul')<Omit<ListProps, 'items'>>((input) => ({
    ...listStyler(input),
    listStyle: input.variant === 'none' ? 'none' : 'disc',
}));

const OrderedList = styled('ol')<Omit<ListProps, 'items'>>((input) => ({
    ...listStyler(input),
    listStyle: input.variant === 'none' ? 'none' : 'decimal',
    '& li::marker': {
        fontSize: input.theme.typography.variant.body1.fontSize,

        [input.theme.breakpoints.down('sm')]: {
            fontSize: input.theme.typography.variant.body2.fontSize,
        },
    },
}));

export interface ListProps {
    variant?: 'ordered' | 'unordered' | 'none';
    spacing?: number;
    sx?: SxProps<Theme>;
    color?: Color;
    items: Array<string | ReactElement>;
}

export function List({ items, color, ...other }: ListProps) {
    const Component = other.variant === 'ordered' ? OrderedList : UnorderedList;

    return (
        <Component {...other}>
            {items.map((item, idx) => {
                const key = React.isValidElement(item)
                    ? item.key || idx.toString()
                    : typeof item === 'string'
                      ? item
                      : idx.toString();

                return (
                    <li key={key}>
                        {React.isValidElement(item) ? (
                            item
                        ) : (
                            <Text color={color}>{item}</Text>
                        )}
                    </li>
                );
            })}
        </Component>
    );
}
