import React, { ReactElement } from 'react';
import { Text } from '../typography';
import { Color, styled, Theme, toColor } from '../theme';
import { SxProps } from '@mui/system/styleFunctionSx';
import { color } from '@mui/system';

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

const StyledHeaderCell = styled('th')<{
    withBorder?: boolean;
    fontColor?: Color;
}>(({ theme, withBorder, fontColor }) => ({
    fontFamily: theme.typography.fontFamily,
    fontWeight: theme.typography.fontWeight.normal,
    display: 'table-cell',
    verticalAlign: 'inherit',
    textAlign: 'center',
    padding: theme.spacing(2),
    ...(fontColor && {
        '& > *': {
            color: toColor(theme, fontColor),
        },
    }),
    '&:first-of-type': {
        borderRight: `1px solid ${theme.palette.black.light}`,
    },
    '&:last-of-type': {
        borderLeft: `1px solid ${theme.palette.black.light}`,
    },
    '&:not(:first-of-type):not(:last-of-type)': {
        borderRight: `1px solid ${theme.palette.black.light}`,
        borderLeft: `1px solid ${theme.palette.black.light}`,
    },
    ...(withBorder && {
        borderBottom: `1px solid ${theme.palette.black.light}`,
    }),
}));

const StyledTableRow = styled('tr')(({ theme }) => ({
    color: 'inherit',
    display: 'table-row',
    verticalAlign: 'middle',
    outline: 0,
    '&:first-of-type td': {
        paddingTop: theme.spacing(2),
    },

    '&:last-of-type td': {
        paddingBottom: theme.spacing(2),
    },
}));

const StyledRowCell = styled('td')<{ withBorder?: boolean }>(
    ({ theme, withBorder }) => ({
        fontFamily: theme.typography.fontFamily,
        fontWeight: theme.typography.fontWeight.normal,
        display: 'table-cell',
        verticalAlign: 'top',
        textAlign: 'left',
        padding: '4px',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        '&:first-of-type': {
            borderRight: `1px solid ${theme.palette.black.light}`,
        },
        '&:last-of-type': {
            borderLeft: `1px solid ${theme.palette.black.light}`,
        },
        '&:not(:first-of-type):not(:last-of-type)': {
            borderRight: `1px solid ${theme.palette.black.light}`,
            borderLeft: `1px solid ${theme.palette.black.light}`,
        },
        ...(withBorder && {
            borderTop: `1px solid ${theme.palette.black.light}`,
        }),
    })
);

export type TableCell = string | ReactElement;

export type TableRow = Array<TableCell>;

export interface TableProps {
    readonly headerColor?: Color;
    readonly columns: TableCell[];
    readonly rows: TableRow[];
    readonly withBorder?: boolean;
    readonly sx?: SxProps<Theme>;
}

export function Table({
    headerColor,
    columns,
    rows,
    sx,
    withBorder,
}: TableProps): ReactElement {
    return (
        <Wrapper sx={sx}>
            <StyledTable>
                <thead>
                    <StyledTableRow>
                        {columns.map((column, index) => (
                            <StyledHeaderCell
                                key={index}
                                fontColor={headerColor}
                                withBorder={!withBorder}
                            >
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
                                <StyledRowCell
                                    key={index}
                                    withBorder={withBorder}
                                >
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
