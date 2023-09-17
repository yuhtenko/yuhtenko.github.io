import React from 'react';
import { ArrowLeftIcon } from '../icons';
import { Link } from '../link';

export function BackButton() {
    return (
        <Link className="header-back-button" to="/">
            <ArrowLeftIcon />
        </Link>
    );
}
