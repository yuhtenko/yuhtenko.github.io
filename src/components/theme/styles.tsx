// src/components/GlobalStyle.js
import React from 'react';
import { Global, css } from '@emotion/react';
import latin300NormalWoff from '../../fonts/montserrat-latin-300-normal.woff';
import latin300ItalicWoff from '../../fonts/montserrat-latin-300-italic.woff';
import latin400NormalWoff from '../../fonts/montserrat-latin-400-normal.woff';
import latin400ItalicWoff from '../../fonts/montserrat-latin-400-italic.woff';
import latin500NormalWoff from '../../fonts/montserrat-latin-500-normal.woff';
import latin500ItalicWoff from '../../fonts/montserrat-latin-500-italic.woff';
import latin600NormalWoff from '../../fonts/montserrat-latin-600-normal.woff';
import latin600ItalicWoff from '../../fonts/montserrat-latin-600-italic.woff';
import latin700NormalWoff from '../../fonts/montserrat-latin-700-normal.woff';
import latin700ItalicWoff from '../../fonts/montserrat-latin-700-italic.woff';

const GlobalStyle = () => (
    <Global
        styles={css`
            /* Montserrat - weight 300 */
            @font-face {
                font-family: 'Montserrat';
                src: url(${latin300NormalWoff}) format('woff');
                font-weight: 300;
                font-style: normal;
            }

            @font-face {
                font-family: 'Montserrat';
                src: url(${latin300ItalicWoff}) format('woff');
                font-weight: 300;
                font-style: italic;
            }

            /* Montserrat - weight 400 */
            @font-face {
                font-family: 'Montserrat';
                src: url(${latin400NormalWoff}) format('woff');
                font-weight: 400;
                font-style: normal;
            }

            @font-face {
                font-family: 'Montserrat';
                src: url(${latin400ItalicWoff}) format('woff');
                font-weight: 400;
                font-style: italic;
            }

            /* Montserrat - weight 500 */
            @font-face {
                font-family: 'Montserrat';
                src: url(${latin500NormalWoff}) format('woff');
                font-weight: 500;
                font-style: normal;
            }

            @font-face {
                font-family: 'Montserrat';
                src: url(${latin500ItalicWoff}) format('woff');
                font-weight: 500;
                font-style: italic;
            }

            /* Montserrat - weight 600 */
            @font-face {
                font-family: 'Montserrat';
                src: url(${latin600NormalWoff}) format('woff');
                font-weight: 600;
                font-style: normal;
            }

            @font-face {
                font-family: 'Montserrat';
                src: url(${latin600ItalicWoff}) format('woff');
                font-weight: 600;
                font-style: italic;
            }

            /* Montserrat - weight 700 */
            @font-face {
                font-family: 'Montserrat';
                src: url(${latin700NormalWoff}) format('woff');
                font-weight: 700;
                font-style: normal;
            }

            @font-face {
                font-family: 'Montserrat';
                src: url(${latin700ItalicWoff}) format('woff');
                font-weight: 700;
                font-style: italic;
            }
        `}
    />
);

export default GlobalStyle;
