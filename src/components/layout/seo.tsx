import React, { PropsWithChildren } from 'react';
import data from '../../../website.json';
import image from '../../images/image.png';

export interface SEOProps {
    title: string;
    area?: string;
    description: string;
    pathname?: string;
}

export const SEO = ({
    title,
    area,
    description,
    pathname,
    children,
}: PropsWithChildren<SEOProps>) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        url: siteUrl,
    } = data;
    const seo = {
        title: area
            ? `${title} | ${area} | ${defaultTitle}`
            : `${title} | ${defaultTitle}`,
        description: description ?? defaultDescription,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            {/*<meta name="twitter:creator" content={seo.twitterUsername} />*/}
            <link
                rel="icon"
                href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>👤</text></svg>"
            />
            {children}
        </>
    );
};
