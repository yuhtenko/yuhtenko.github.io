import React, { ReactElement } from 'react';

export interface LightroomIconProps {
    className?: string;
}

export function LightroomIcon({ className }: LightroomIconProps): ReactElement {
    return (
        <svg
            className={className}
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.85335 0.5H41.1466C45.7534 0.5 49.5 4.32415 49.5 9.08V40.92C49.5 45.6758 45.7534 49.5 41.1466 49.5H8.85335C4.24664 49.5 0.5 45.6758 0.5 40.92V9.08C0.5 4.32415 4.24664 0.5 8.85335 0.5Z"
                fill="white"
                stroke="#3A3537"
            />
            <path
                d="M26.2479 35.34H13.0459C12.8119 35.34 12.7144 35.22 12.7144 34.96V13.12C12.6949 12.98 12.7924 12.84 12.9484 12.82C12.9679 12.82 12.9874 12.82 13.0264 12.82H17.1021C17.1996 12.8 17.3361 12.88 17.3361 13C17.3361 13.02 17.3361 13.04 17.3361 13.06V31H26.9695C27.184 31 27.2425 31.1 27.2035 31.3L26.5989 35.02C26.5989 35.12 26.5404 35.22 26.4819 35.28C26.4039 35.32 26.3259 35.34 26.2479 35.34Z"
                fill="#FFB206"
            />
            <path
                d="M29.5825 18.24H33.2291C33.4436 18.24 33.5996 18.38 33.6581 18.58C33.7361 18.72 33.7946 18.9 33.8336 19.08C33.8726 19.3 33.9116 19.52 33.9311 19.74C33.9506 19.98 33.9701 20.24 33.9701 20.5C34.5942 19.76 35.3547 19.14 36.1932 18.66C37.1488 18.12 38.2213 17.86 39.2939 17.9C39.4304 17.88 39.5669 17.98 39.5864 18.14C39.5864 18.16 39.5864 18.18 39.5864 18.22V22.4C39.5864 22.58 39.4889 22.64 39.2549 22.64C37.9093 22.56 36.5443 22.82 35.3157 23.36C34.9062 23.56 34.4967 23.8 34.1847 24.16V35.06C34.1847 35.28 34.1067 35.36 33.9116 35.36H29.8555C29.68 35.38 29.5435 35.28 29.524 35.1C29.524 35.08 29.524 35.04 29.524 35.02V23.18C29.524 22.66 29.524 22.14 29.5045 21.58C29.485 21.02 29.485 20.46 29.4655 19.92C29.446 19.44 29.407 18.98 29.3485 18.5C29.329 18.4 29.3875 18.28 29.485 18.26C29.524 18.22 29.5435 18.22 29.5825 18.24Z"
                fill="#FFB206"
            />
        </svg>
    );
}
