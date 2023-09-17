import React, { ReactElement } from 'react';

export interface PhotoshopIconProps {
    className?: string;
}

export function PhotoshopIcon({ className }: PhotoshopIconProps): ReactElement {
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
                d="M8.85417 0.5H41.1458C45.7537 0.5 49.5 4.32396 49.5 9.0812V40.9188C49.5 45.676 45.7537 49.5 41.1458 49.5H8.85417C4.24633 49.5 0.5 45.676 0.5 40.9188V9.0812C0.5 4.32396 4.24633 0.5 8.85417 0.5Z"
                fill="white"
                stroke="#3A3537"
            />
            <path
                d="M10.1851 35.0633V13.0761C10.1851 12.9266 10.2476 12.8411 10.3934 12.8411C10.7476 12.8411 11.0809 12.8411 11.5601 12.8197C12.0601 12.7984 12.5809 12.7984 13.1434 12.777C13.7059 12.7556 14.3101 12.7556 14.9559 12.7343C15.6017 12.7129 16.2267 12.7129 16.8517 12.7129C18.5601 12.7129 19.9767 12.9266 21.1434 13.3753C22.1851 13.7385 23.1434 14.3368 23.9351 15.1274C24.6017 15.8112 25.1226 16.6445 25.4559 17.5633C25.7684 18.4608 25.9351 19.3796 25.9351 20.3411C25.9351 22.1787 25.5184 23.6958 24.6851 24.8924C23.8517 26.089 22.6851 26.9864 21.3309 27.4992C19.9142 28.0334 18.3517 28.2257 16.6434 28.2257C16.1434 28.2257 15.8101 28.2257 15.6017 28.2043C15.3934 28.183 15.1017 28.183 14.7059 28.183V35.0419C14.7267 35.1915 14.6226 35.3197 14.4767 35.3411C14.4559 35.3411 14.4351 35.3411 14.3934 35.3411H10.4351C10.2684 35.3411 10.1851 35.2556 10.1851 35.0633ZM14.7267 16.965V24.1445C15.0184 24.1659 15.2892 24.1872 15.5392 24.1872H16.6434C17.4559 24.1872 18.2684 24.059 19.0392 23.8026C19.7059 23.6103 20.2892 23.2043 20.7476 22.6702C21.1851 22.136 21.3934 21.4095 21.3934 20.4693C21.4142 19.8069 21.2476 19.1445 20.9142 18.5676C20.5601 18.012 20.0601 17.5847 19.4559 17.3496C18.6851 17.0291 17.8517 16.9009 16.9976 16.9223C16.4559 16.9223 15.9767 16.9223 15.5809 16.9437C15.1642 16.9223 14.8726 16.9437 14.7267 16.965Z"
                fill="#FFB206"
            />
            <path
                d="M38.9351 22.8408C38.3101 22.4989 37.6434 22.2639 36.9351 22.1143C36.1643 21.9433 35.3934 21.8365 34.6018 21.8365C34.1851 21.8151 33.7476 21.8792 33.3518 21.9861C33.0809 22.0502 32.8518 22.1998 32.7059 22.4134C32.6018 22.5844 32.5393 22.798 32.5393 22.9904C32.5393 23.1827 32.6226 23.375 32.7476 23.5459C32.9351 23.7809 33.1851 23.9733 33.4559 24.1228C33.9351 24.3792 34.4351 24.6143 34.9351 24.828C36.0601 25.2126 37.1434 25.7468 38.1434 26.3878C38.8309 26.8365 39.3934 27.4348 39.7893 28.1613C40.1226 28.8451 40.2893 29.5929 40.2684 30.3621C40.2893 31.3664 39.9976 32.3707 39.4559 33.204C38.8726 34.0587 38.0601 34.7211 37.1226 35.1057C36.1018 35.5545 34.8518 35.7895 33.3518 35.7895C32.3934 35.7895 31.4559 35.704 30.5184 35.5117C29.7893 35.3835 29.0601 35.1485 28.3934 34.828C28.2476 34.7425 28.1434 34.5929 28.1643 34.422V30.704C28.1643 30.6399 28.1851 30.5545 28.2476 30.5117C28.3101 30.469 28.3726 30.4904 28.4351 30.5331C29.2476 31.0245 30.1018 31.3664 31.0184 31.5801C31.8101 31.7938 32.6434 31.9006 33.4768 31.9006C34.2684 31.9006 34.8309 31.7938 35.2059 31.6015C35.5393 31.4519 35.7684 31.0886 35.7684 30.704C35.7684 30.4049 35.6018 30.1271 35.2684 29.8493C34.9351 29.5715 34.2476 29.251 33.2268 28.8451C32.1643 28.4604 31.1851 27.9476 30.2684 27.3066C29.6226 26.8365 29.0809 26.2168 28.6851 25.4904C28.3518 24.8066 28.1851 24.0587 28.2059 23.3109C28.2059 22.3921 28.4559 21.516 28.9143 20.7254C29.4351 19.8707 30.2059 19.1869 31.1018 18.7596C32.0809 18.2468 33.3101 18.0117 34.7893 18.0117C35.6434 18.0117 36.5184 18.0758 37.3726 18.204C37.9976 18.2895 38.6018 18.4604 39.1643 18.6955C39.2476 18.7168 39.3309 18.8023 39.3726 18.8878C39.3934 18.9733 39.4143 19.0587 39.4143 19.1442V22.6271C39.4143 22.7126 39.3726 22.798 39.3101 22.8408C39.1226 22.8835 39.0184 22.8835 38.9351 22.8408Z"
                fill="#FFB206"
            />
        </svg>
    );
}
