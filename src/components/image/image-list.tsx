import React, { PropsWithChildren, ReactElement } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useTheme } from '../theme';

export interface ImageListProps {
    className?: string;
}

export function ImageList({
    className,
    children,
}: PropsWithChildren<ImageListProps>): ReactElement {
    const theme = useTheme();
    const count = React.Children.count(children);
    const maxColumns = count > 3 ? 4 : count === 3 ? 3 : count;

    return (
        <ResponsiveMasonry
            className={className}
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: maxColumns }}
        >
            <Masonry gutter={theme.spacing(3)}>{children}</Masonry>
        </ResponsiveMasonry>
    );
}
