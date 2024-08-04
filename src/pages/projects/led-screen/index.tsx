import LedPage, { PROJECT_ID } from './led';
import { ProjectSEO } from '../../../components/layout/seo';
import React from 'react';

export const Head = () => <ProjectSEO projectId={PROJECT_ID} />;

export default LedPage;
