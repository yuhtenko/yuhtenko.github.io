import CatPage from './cat-shelter';
import data from '../../../../website.json';
import { SEO } from '../../../components/layout/seo';
import React from 'react';

const info = data.projects.find((project) => project.id === 'cat-shelter')!;

export const Head = () => (
    <SEO
        title={info!.title}
        area={'Projects'}
        description={info.description}
        pathname={info.path}
    />
);

export default CatPage;
