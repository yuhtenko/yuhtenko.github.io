import { ImageListProps } from './image-list';
import React, { ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import { useMediaQuery } from '@mui/system';
import { useTheme } from '../theme';
import { Breakpoint } from '@mui/system/createTheme/createBreakpoints';
import { ImageProps } from './image';

export interface ColumnarImageListProps extends ImageListProps {
    readonly images: Array<ReactElement<ImageProps>[]>;
}

function regroupImages(
    imageGroups: Array<ReactElement[]>,
    requiredGroups: number
): Array<ReactElement[]> {
    const originalGroups = imageGroups.length;

    if (originalGroups < requiredGroups) {
        return imageGroups;
    }

    const result: Array<ReactElement[]> = [];

    for (let i = 0; i < originalGroups; i++) {
        let targetGroup = 0;

        if (i === 0) {
            targetGroup = 0;
        } else if (i % 2) {
            targetGroup = result.length - 1;
        } else {
            targetGroup = result.length;
        }

        if (!result[targetGroup]) {
            result[targetGroup] = [];
        }

        result[targetGroup] = result[targetGroup].concat(...imageGroups[i]);
    }

    return result;
}

function regroupImagesByScreenSize(
    screenSize: Breakpoint,
    images: Array<ReactElement[]>
): Array<ReactElement[]> {
    switch (screenSize) {
        case 'sm':
            return regroupImages(images, 2);
        case 'xs':
            return regroupImages(images, 2);
        default:
            return images;
    }
}

export function ColumnarImageList({
    className,
    images,
}: ColumnarImageListProps): ReactElement {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.down('sm'));
    const imgGroups = regroupImagesByScreenSize(sm ? 'sm' : 'lg', images);

    return (
        <Stack
            className={className}
            direction="row"
            gap={2}
            justifyContent="space-evenly"
        >
            {imgGroups.map((image, index) => (
                <Stack
                    key={`${index}_${Date.now()}`}
                    direction="column"
                    spacing={3}
                >
                    {image}
                </Stack>
            ))}
        </Stack>
    );
}
