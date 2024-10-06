import BubbleupPage, { PROJECT_ID } from './bubbleup';
import { ProjectSEO } from '../../../components/layout/seo';
import React from 'react';

export const Head = () => <ProjectSEO projectId={PROJECT_ID} />;

export default BubbleupPage;
