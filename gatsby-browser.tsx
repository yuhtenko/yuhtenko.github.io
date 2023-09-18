// @ts-ignore
import { WindowLocation } from '@reach/router';
import { WrapPageElementBrowserArgs } from 'gatsby';
import React from 'react';
import { Layout } from './src/components/layout';
import { NavItem } from './src/components/link';
import { ThemeProvider } from './src/components/theme';
import './src/styles/index.scss';
import { arePathsEqual } from './src/utils';
import website from './website.json';

function buildHeaderLinks(loc: WindowLocation): [NavItem[], NavItem[]] {
    const top: NavItem[] = [];
    const group: NavItem[] = [];

    if (arePathsEqual(loc.pathname, '/')) {
        website.sections?.forEach((i) => {
            top.push({
                label: i.title,
                to: `/${i.path}`,
                isActive: arePathsEqual(i.path, loc.pathname),
            });
        });
    }

    website.projects?.forEach((i) => {
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
        <>
            <ThemeProvider>{element}</ThemeProvider>
        </>
    );
}

export function wrapPageElement({
    element,
    props,
}: WrapPageElementBrowserArgs) {
    const { location } = props;
    const [nav, work] = buildHeaderLinks(location);
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
