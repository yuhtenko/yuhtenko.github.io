import CatPage, { PROJECT_ID } from './cat-shelter';
import { ProjectSEO } from '../../../components/layout/seo';
import React from 'react';

export const Head = () => <ProjectSEO projectId={PROJECT_ID} />;

export default CatPage;
