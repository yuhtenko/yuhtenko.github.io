import FerretPage from './ferret';
import { SEO } from '../../../components/layout/seo';
import React from 'react';
import data from '../../../../website.json';

const ferret = data.projects.find((project) => project.id === 'ferret')!;

export const Head = () => (
    <SEO
        title={ferret!.title}
        area={'Projects'}
        description={ferret.description}
        pathname={ferret.path}
    />
);

export default FerretPage;
