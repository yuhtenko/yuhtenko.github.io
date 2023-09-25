import LedPage from './led';
import data from '../../../../website.json';
import { SEO } from '../../../components/layout/seo';
import React from 'react';

const info = data.projects.find((project) => project.id === 'led-screen')!;

export const Head = () => (
    <SEO
        title={info!.title}
        area={'Projects'}
        description={`${info.title} | ${info.description}`}
        pathname={info.path}
    />
);
export default LedPage;
