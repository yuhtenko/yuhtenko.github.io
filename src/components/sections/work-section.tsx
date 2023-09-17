import React, { PropsWithChildren } from 'react';
import { SxProps } from '@mui/system';
import Stack from '@mui/system/Stack';
import Grid, { GridProps } from '@mui/system/Unstable_Grid';
import { Heading, HeadingVariant, HeadingVariantTuple } from '../typography';

export interface WorkSectionProps
    extends Pick<GridProps, 'paddingBottom' | 'paddingTop'> {
    id: string;
    variant: HeadingVariant | HeadingVariantTuple;
    className?: string;
    heading?: string | string[];
    noOffset?: boolean;
    noMargin?: boolean;
    sx?: SxProps;
    withSubSections?: boolean;
}

export function WorkSection({
    id,
    variant,
    className,
    children,
    heading,
    paddingTop,
    paddingBottom,
    noOffset,
    noMargin,
    sx,
    withSubSections,
}: PropsWithChildren<WorkSectionProps>) {
    const headingArray = Array.isArray(heading) ? heading : [heading];

    const content = !withSubSections ? (
        children
    ) : (
        <Stack direction={'column'} spacing={3}>
            {children}
        </Stack>
    );
    return (
        <Grid
            id={id}
            container
            className={className}
            component="section"
            spacing={5}
            direction={'column'}
            justifyContent={'flex-start'}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            sx={sx}
        >
            <Grid xs={12} paddingBottom={0}>
                {headingArray.length > 0 && (
                    <Heading
                        size={'heading2'}
                        variant={variant}
                        noMargin={noMargin}
                    >
                        {heading}
                    </Heading>
                )}
            </Grid>

            {!noOffset ? (
                <Grid xs={12} md={11} mdOffset={1} paddingTop={0}>
                    {content}
                </Grid>
            ) : (
                <Grid xs={12} paddingTop={0}>
                    {content}
                </Grid>
            )}
        </Grid>
    );
}
