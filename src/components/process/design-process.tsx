import React, { PropsWithChildren, ReactElement } from 'react';
import Stack from '@mui/system/Stack';
import Grid from '@mui/system/Unstable_Grid';
import { DesignProcessStep } from './design-process-step';

export function DesignProcess({ children }: PropsWithChildren): ReactElement {
    return (
        <Grid
            container
            spacing={5}
            direction={'row'}
            justifyContent={'space-between'}
        >
            {React.Children.map(children, (child) => (
                <Grid xs={12} sm={6} md>
                    {child}
                </Grid>
            ))}
        </Grid>
    );
}

DesignProcess.Step = DesignProcessStep;
