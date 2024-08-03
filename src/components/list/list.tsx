import { styled, Theme } from '../theme';
import { Text } from '../typography';
import React, { ReactElement, ReactNode } from 'react';

type ListStyler = (props: { theme: Theme } & Omit<ListProps, 'items'>) => any;

const listStyler: ListStyler = ({ theme, variant }) => ({
    fontSize: '14px',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    paddingLeft: variant === 'none' ? 0 : theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        paddingLeft: variant === 'none' ? 0 : theme.spacing(2),
    },
});

const UnorderedList = styled('ul')<Omit<ListProps, 'items'>>((input) => ({
    ...listStyler(input),
    listStyle: input.variant === 'none' ? 'none' : 'disc',
}));

const OrderedList = styled('ol')<Omit<ListProps, 'items'>>((input) => ({
    ...listStyler(input),
    listStyle: input.variant === 'none' ? 'none' : 'decimal',
}));

export interface ListProps {
    variant?: 'ordered' | 'unordered' | 'none';
    items: Array<string | ReactElement>;
}

export function List({ items, ...other }: ListProps) {
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
                            <Text>{item}</Text>
                        )}
                    </li>
                );
            })}
        </Component>
    );
}
