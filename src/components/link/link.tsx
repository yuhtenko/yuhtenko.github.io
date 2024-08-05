import { Link as LinkImpl } from 'gatsby';
import React, { PropsWithChildren } from 'react';

export interface NavItem {
    label: string;
    to: string;
    isActive?: boolean;
}

export interface LinkProps extends Omit<NavItem, 'label'> {
    className?: string;
}

export function Link({
    className,
    to,
    children,
}: PropsWithChildren<LinkProps>) {
    if (to.includes('static')) {
        return (
            <a className={className} href={to}>
                {children}
            </a>
        );
    }

    return (
        <LinkImpl className={className} to={to}>
            {children}
        </LinkImpl>
    );
}
