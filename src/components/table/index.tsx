import React, { ReactElement } from 'react';
import { Text } from '../typography';
import { styled } from '../theme';

const Wrapper = styled('div')(({ theme }) => ({
    border: `1px solid ${theme.palette.black.light}`,
    borderRadius: theme.shape.borderRadius,
}));

const StyledTable = styled('table')(({ theme }) => ({
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: 0,
    '& thead': {
        display: 'table-header-group',
    },
}));

const StyledHeaderCell = styled('th')(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight.normal,
    display: 'table-cell',
    verticalAlign: 'inherit',
    borderBottom: `1px solid ${theme.palette.black.light}`,
    textAlign: 'center',
    padding: theme.spacing(2),
    '&:first-child': {
        borderRight: `1px solid ${theme.palette.black.light}`,
    },
    '&:last-child': {
        borderLeft: `1px solid ${theme.palette.black.light}`,
    },
    '&:not(:first-child):not(:last-child)': {
        borderRight: `1px solid ${theme.palette.black.light}`,
        borderLeft: `1px solid ${theme.palette.black.light}`,
    },
}));

const StyledTableRow = styled('tr')(({ theme }) => ({
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    outline: 0,
    '&:first-child td': {
        paddingTop: theme.spacing(2),
    },

    '&:last-child td': {
        paddingBottom: theme.spacing(2),
    },
}));

const StyledRowCell = styled('td')(({ theme }) => ({
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight.normal,
    display: 'table-cell',
    verticalAlign: 'inherit',
    textAlign: 'left',
    padding: '4px',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&:first-child': {
        borderRight: `1px solid ${theme.palette.black.light}`,
    },
    '&:last-child': {
        borderLeft: `1px solid ${theme.palette.black.light}`,
    },
    '&:not(:first-child):not(:last-child)': {
        borderRight: `1px solid ${theme.palette.black.light}`,
        borderLeft: `1px solid ${theme.palette.black.light}`,
    },
}));

export type TableCell = string | ReactElement;

export type TableRow = Array<TableCell>;

export interface TableProps {
    readonly columns: TableCell[];
    readonly rows: TableRow[];
}

export function Table({ columns, rows }: TableProps): ReactElement {
    return (
        <Wrapper>
            <StyledTable>
                <thead>
                    <StyledTableRow>
                        {columns.map((column, index) => (
                            <StyledHeaderCell key={index}>
                                {typeof column === 'string' ? (
                                    <Text>{column}</Text>
                                ) : (
                                    column
                                )}
                            </StyledHeaderCell>
                        ))}
                    </StyledTableRow>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            {row.map((cell, index) => (
                                <StyledRowCell key={index}>
                                    {typeof cell === 'string' ? (
                                        <Text>{cell}</Text>
                                    ) : (
                                        cell
                                    )}
                                </StyledRowCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </tbody>
            </StyledTable>
        </Wrapper>
    );
}
