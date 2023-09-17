import { styled } from '../theme';
import { Typography, toTypographyCss } from './typography';

export interface SubtitleProps extends Typography {}

export const Subtitle = styled('span')<SubtitleProps>(
    ({ theme, color, weight }) => {
        const common = toTypographyCss(
            theme,
            weight ?? 'medium',
            color ?? 'primary'
        );
        return {
            ...theme.typography.variant.subtitle1,
            ...common,
            marginBottom: '16px',
            [theme.breakpoints.down('sm')]: {
                ...theme.typography.variant.subtitle2,
                ...common,
                marginBottom: '12px',
            },
        };
    }
);
