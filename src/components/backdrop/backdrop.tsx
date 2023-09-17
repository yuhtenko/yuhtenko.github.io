import React from 'react';
import ReactDOM from 'react-dom';
import './backdrop.scss';

export interface BackdropProps {
    onClick: () => void;
}

export function Backdrop({ onClick }: BackdropProps) {
    return ReactDOM.createPortal(
        <div id="backdrop" className="backdrop" onClick={onClick}></div>,
        document.body
    );
}
