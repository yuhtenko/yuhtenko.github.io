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
        name: data.name,
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
            <meta name="image" content={seo.image} />
            <meta name="description" content={seo.description} />

            {/*Open Graph (OG) Tags for Facebook*/}
            <meta property="og:title" content={seo.title} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:site_name" content={seo.name} />
            <meta property="og:locale" content="en_US" />

            {/*Twitter Card Tags*/}
            <meta name="twitter:card" content={seo.image} />
            <meta name="twitter:title" content={seo.name} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />

            {/*Apple*/}
            <meta name="mobile-web-app-capable" content="yes" />
            {children}
        </>
    );
};
