import React, { PropsWithChildren, ReactElement } from 'react';
import Grid from '@mui/system/Unstable_Grid';
import { DesignProcessStep } from './design-process-step';
import { Subtitle } from '../typography';
import { styled } from '../theme';

export interface DesignProcessProps {
    readonly title?: string;
    readonly spacing?: number;
}

const DesignProcessGrid = styled(Grid)<{ hasTitle?: boolean }>(({
    theme,
    hasTitle,
}) => {
    const gridStyles: Record<string, any> = {};

    if (hasTitle) {
        gridStyles['marginTop'] = '0 !important';
    }

    return gridStyles;
});

export function DesignProcess({
    title,
    spacing = 5,
    children,
    ...rest
}: PropsWithChildren<DesignProcessProps>): ReactElement {
    return (
        <>
            {title && <Subtitle>{title}</Subtitle>}
            <DesignProcessGrid
                {...rest}
                container
                spacing={spacing}
                direction={'row'}
                justifyContent={'space-between'}
                alignItems="flex-start"
                hasTitle={!!title}
            >
                {React.Children.map(children, (child) => (
                    <Grid xs={12} sm={6} md>
                        {child}
                    </Grid>
                ))}
            </DesignProcessGrid>
        </>
    );
}

DesignProcess.Step = DesignProcessStep;
