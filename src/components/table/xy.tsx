import React, { ReactElement } from 'react';
import { Table, TableCell, TableRow } from './table';
import { List } from '../list/list';
import { Color, Theme, toColor } from '../theme';

export type XYTableItem = [TableCell, Array<[TableCell, Array<TableCell>]>];

export interface XYTableProps {
    readonly xColor?: Color;
    readonly yColor?: Color;
    readonly items: XYTableItem[];
}

export function XYTable({ items, xColor, yColor }: XYTableProps): ReactElement {
    const columns: TableCell[] = new Array(items.length + 1);
    const rows: TableRow[] = [];
    columns[0] = ' ';

    for (let c = 0; c < items.length; c++) {
        const [column, values] = items[c];

        columns[c + 1] = column;

        for (let i = 0; i < values.length; i++) {
            if (rows.length <= i) {
                rows.push(new Array(items.length + 1).fill(''));
            }

            const [yColumn, yValues] = values[i];
            rows[i][0] = yColumn;
            rows[i][c + 1] = <List items={yValues} />;
        }
    }

    const sx = (theme: Theme) => ({
        '& tr td:first-of-type': {
            verticalAlign: 'middle',
            textAlign: 'center',
            '& > *': {
                color: toColor(theme, yColor),
            },
        },
    });

    return (
        <Table
            headerColor={xColor}
            columns={columns}
            rows={rows}
            sx={sx}
            withBorder
        />
    );
}
