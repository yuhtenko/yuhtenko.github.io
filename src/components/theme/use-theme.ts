import { useTheme as useThemeInternal } from '@mui/system';
import { Theme } from './theme';

export function useTheme(): Theme {
    return useThemeInternal<Theme>();
}
