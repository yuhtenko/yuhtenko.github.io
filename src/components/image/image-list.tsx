import React, { PropsWithChildren, ReactElement } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useTheme } from '../theme';

export type ColumnBreakpoints = {
    [key: number]: number;
};

export interface ImageListProps {
    className?: string;
    columnsCountBreakPoints?: ColumnBreakpoints;
}

export function ImageList({
    className,
    columnsCountBreakPoints,
    children,
}: PropsWithChildren<ImageListProps>): ReactElement {
    const theme = useTheme();
    const count = React.Children.count(children);
    const maxColumns = count > 3 ? 4 : count === 3 ? 3 : count;

    return (
        <ResponsiveMasonry
            className={className}
            columnsCountBreakPoints={
                columnsCountBreakPoints || { 425: 2, 600: maxColumns }
            }
        >
            <Masonry gutter={theme.spacing(2)}>{children}</Masonry>
        </ResponsiveMasonry>
    );
}
