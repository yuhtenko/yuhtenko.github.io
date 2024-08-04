import React, { PropsWithChildren } from 'react';
import { SxProps } from '@mui/system';
import Grid, { GridProps } from '@mui/system/Unstable_Grid';
import { Link } from '../link';
import { Heading, HeadingVariant, HeadingVariantTuple } from '../typography';

export interface PageSectionProps
    extends Pick<GridProps, 'paddingBottom' | 'paddingTop'> {
    id: string;
    variant: HeadingVariant | HeadingVariantTuple;
    className?: string;
    heading?: string | string[];
    noOffset?: boolean;
    noMargin?: boolean;
    sx?: SxProps;
}

export function PageSection({
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
}: PropsWithChildren<PageSectionProps>) {
    const headingArray = Array.isArray(heading) ? heading : [heading];
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
                        noMargin={noMargin}
                        variant={variant}
                        size="heading1"
                    >
                        {heading}
                    </Heading>
                )}
            </Grid>

            {!noOffset && (
                <Grid xs={12} md={11} mdOffset={1} paddingTop={0}>
                    {children}
                </Grid>
            )}
            {noOffset && (
                <Grid xs={12} paddingTop={0}>
                    {children}
                </Grid>
            )}
        </Grid>
    );
}
