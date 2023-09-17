import React, { PropsWithChildren, ReactElement } from 'react';
import { CSSObject } from '@mui/styled-engine';
import {
    Theme as MuiTheme,
    ThemeProvider as MuiThemeProvider,
    color,
    createTheme,
} from '@mui/system';

export interface PaletteColor {
    main: string;
    light?: string;
}

export type Color =
    | 'primary'
    | 'secondary'
    | 'black'
    | 'grey'
    | 'blue'
    | 'red'
    | 'yellow';

export type FontWeight = 'light' | 'normal' | 'medium' | 'semi-bold' | 'bold';

export type FontTransform = 'uppercase' | 'lowercase' | 'capitalize';

export interface Theme
    extends Omit<MuiTheme, 'palette' | 'typography' | 'transitions'> {
    palette: {
        [key in Color]: PaletteColor;
    };
    sizes: {
        spacing: {
            title: [number, number];
            heading1: [number, number];
            heading2: [number, number];
            subheading1: [number, number];
            subheading2: [number, number];
            section1: [number, number];
            section2: [number, number];
        };
    };
    transitions: {
        duration: {
            fast: number;
            normal: number;
            slow: number;
        };
        easing: {
            main: string;
        };
    };
    typography: {
        fontWeight: {
            [key in FontWeight]: number;
        };
        fontFamily: string;
        variant: {
            h1: CSSObject;
            h2: CSSObject;
            h3: CSSObject;
            h4: CSSObject;
            h5: CSSObject;
            h6: CSSObject;
            h7: CSSObject;
            h8: CSSObject;
            h9: CSSObject;
            h10: CSSObject;
            link1: CSSObject;
            link2: CSSObject;
            subtitle1: CSSObject;
            subtitle2: CSSObject;
            body1: CSSObject;
            body2: CSSObject;
            button1: CSSObject;
            button2: CSSObject;
            caption1: CSSObject;
            caption2: CSSObject;
            quote1: CSSObject;
            quote2: CSSObject;
            quote3: CSSObject;
        };
    };
}

const fontWeight: Record<FontWeight, number> = {
    light: 300,
    normal: 400,
    medium: 500,
    'semi-bold': 600,
    bold: 700,
};

const theme = createTheme({
    shape: {
        borderRadius: 10,
    },
    sizes: {
        spacing: {
            title: [5, 3],
            heading1: [4, 3],
            heading2: [3, 2],
            subheading1: [2, 1],
            subheading2: [1, 1],
            section1: [5, 3],
            section2: [3, 2],
        },
    },
    transitions: {
        duration: {
            fast: 0.075,
            normal: 0.15,
            slow: 0.3,
        },
        easing: {
            main: 'linear',
        },
    },
    palette: {
        primary: {
            main: '#3A3537',
        },
        secondary: {
            main: '#FFFFFF',
        },
        black: {
            main: '#3A3537',
        },
        grey: {
            main: '#8F8F8F',
            light: '#E5E5E5',
        },
        blue: {
            main: '#3B54A0',
        },
        red: {
            main: '#E85746',
        },
        yellow: {
            main: '#FFB206',
        },
    },
    typography: {
        variant: {
            h1: {
                fontSize: 96,
                lineHeight: '144px',
                fontWeight: fontWeight.bold,
                textTransform: 'uppercase',
            },
            h2: {
                fontSize: 56,
                lineHeight: '84px',
                fontWeight: fontWeight.bold,
                textTransform: 'uppercase',
            },
            h3: {
                fontSize: 48,
                lineHeight: '72px',
                fontWeight: fontWeight.bold,
                textTransform: 'uppercase',
            },
            h4: {
                fontSize: 36,
                lineHeight: '54px',
                fontWeight: fontWeight['semi-bold'],
                textTransform: 'uppercase',
            },
            h5: {
                fontSize: 32,
                lineHeight: '48px',
                fontWeight: fontWeight['semi-bold'],
                textTransform: 'uppercase',
            },
            h6: {
                fontSize: 28,
                lineHeight: '42px',
                fontWeight: fontWeight['semi-bold'],
                textTransform: 'uppercase',
            },
            h7: {
                fontSize: 24,
                lineHeight: '36px',
                fontWeight: fontWeight['semi-bold'],
                textTransform: 'uppercase',
            },
            h8: {
                fontSize: 22,
                lineHeight: '33px',
                fontWeight: fontWeight['semi-bold'],
                textTransform: 'uppercase',
            },
            h9: {
                fontSize: 20,
                lineHeight: '30px',
                fontWeight: fontWeight['semi-bold'],
                textTransform: 'uppercase',
            },
            h10: {
                fontSize: 18,
                lineHeight: '27px',
                fontWeight: fontWeight['semi-bold'],
                textTransform: 'uppercase',
            },
            link1: {
                fontSize: 24,
                lineHeight: '36px',
                fontWeight: fontWeight.normal,
            },
            link2: {
                fontSize: 22,
                lineHeight: '33px',
                fontWeight: fontWeight.normal,
            },
            subtitle1: {
                fontSize: 24,
                lineHeight: '36px',
                fontWeight: fontWeight.medium,
            },
            subtitle2: {
                fontSize: 22,
                lineHeight: '33px',
                fontWeight: fontWeight.medium,
            },
            body1: {
                fontSize: 20,
                lineHeight: '30px',
                fontWeight: fontWeight.normal,
            },
            body2: {
                fontSize: 18,
                lineHeight: '27px',
                fontWeight: fontWeight.normal,
            },
            button1: {
                fontSize: 24,
                lineHeight: '36px',
                fontWeight: fontWeight.normal,
                fontStyle: 'normal',
            },
            button2: {
                fontSize: 22,
                lineHeight: '33px',
                fontWeight: fontWeight.normal,
                fontStyle: 'normal',
            },
            caption1: {
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: fontWeight.normal,
            },
            caption2: {
                fontSize: 14,
                lineHeight: '21px',
                fontWeight: fontWeight.normal,
            },
            quote1: {
                fontSize: 24,
                lineHeight: '36px',
                fontWeight: fontWeight.normal,
                fontStyle: 'italic',
            },
            quote2: {
                fontSize: 22,
                lineHeight: '33px',
                fontWeight: fontWeight.normal,
                fontStyle: 'italic',
            },
            quote3: {
                fontSize: 18,
                lineHeight: '27px',
                fontWeight: fontWeight.normal,
                fontStyle: 'italic',
            },
        },
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        fontWeight,
    },
} as any);

export function ThemeProvider({ children }: PropsWithChildren): ReactElement {
    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
