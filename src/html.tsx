import React from 'react';

export default function HTML(props: any) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.cdnfonts.com/css/bebas-neue"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.cdnfonts.com/css/montserrat"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.cdnfonts.com/css/lato"
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <div
                    key={`body`}
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}
