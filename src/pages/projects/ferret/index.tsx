import FerretPage, { PROJECT_ID } from './ferret';
import { ProjectSEO } from '../../../components/layout/seo';
import React from 'react';

export const Head = () => <ProjectSEO projectId={PROJECT_ID} />;

export default FerretPage;
