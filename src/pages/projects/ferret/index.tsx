import FerretPage from './ferret';
import { SEO } from '../../../components/layout/seo';
import React from 'react';
import data from '../../../../website.json';

const info = data.projects.find((project) => project.id === 'ferret')!;

export const Head = () => (
    <SEO
        title={info!.title}
        area={'Projects'}
        description={`${info.title} | ${info.description}`}
        pathname={info.path}
    />
);

export default FerretPage;
