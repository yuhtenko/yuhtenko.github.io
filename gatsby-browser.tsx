// @ts-ignore
import { WindowLocation } from '@reach/router';
import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { PhotoProvider } from 'react-photo-view';
import resumePdf from './src/pages/assets/yulia_yukhtenko_resume.pdf';
import { Layout } from './src/components/layout';
import { NavItem } from './src/components/link';
import { ThemeProvider } from './src/components/theme';
import './src/styles/index.scss';
import { arePathsEqual } from './src/utils';
import website from './website.json';
import GlobalStyle from './src/components/theme/styles';
import { AppDataProvider } from './src/components/app/context';
import { AppData } from './src/common/app';

const FILES: Record<string, string> = {
    'file://yulia_yukhtenko_resume.pdf': resumePdf,
};

function buildHeaderLinks(
    loc: WindowLocation,
    data: AppData
): [NavItem[], NavItem[]] {
    const top: NavItem[] = [];
    const group: NavItem[] = [];

    if (arePathsEqual(loc.pathname, '/')) {
        data.sections?.forEach((i) => {
            const filePath = FILES[i.url || ''];

            top.push({
                label: i.title,
                to: filePath || `/${i.path}`,
                isActive: arePathsEqual(i.path, loc.pathname),
            });
        });
    }

    data.projects?.forEach((i) => {
        group.push({
            label: i.title,
            to: i.path,
            isActive: arePathsEqual(i.path, loc.pathname),
        });
    });

    return [top, group];
}

export function wrapRootElement({ element }: WrapPageElementBrowserArgs) {
    return (
        <AppDataProvider value={website}>
            <GlobalStyle />
            <ThemeProvider>
                <PhotoProvider>{element}</PhotoProvider>
            </ThemeProvider>
        </AppDataProvider>
    );
}

export function wrapPageElement({
    element,
    props,
}: WrapPageElementBrowserArgs) {
    const { location } = props;
    const [nav, work] = buildHeaderLinks(location, AppData.create(website));
    const isHome = arePathsEqual(location.pathname, '/');

    return (
        <Layout
            headerNav={nav}
            headerWork={work}
            withHomeButton={!isHome}
            contentSpacing={isHome ? 'home' : 'projects'}
        >
            {element}
        </Layout>
    );
}
