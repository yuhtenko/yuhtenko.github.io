import React from 'react';
import { Table, TableCell, TableRow } from './table';

export type VerticalTableItem = [TableCell, Array<TableCell>];

export interface VerticalTableProps {
    readonly items: VerticalTableItem[];
}

export function VerticalTable({ items }: VerticalTableProps) {
    const columns: TableCell[] = [];
    const rows: TableRow[] = [];

    for (let c = 0; c < items.length; c++) {
        const [column, values] = items[c];

        columns.push(column);

        for (let i = 0; i < values.length; i++) {
            if (rows.length <= i) {
                rows.push(new Array(items.length).fill(''));
            }

            rows[i][c] = values[i];
        }
    }

    return <Table columns={columns} rows={rows} />;
}
