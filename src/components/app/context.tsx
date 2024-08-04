import React, { createContext, PropsWithChildren, useContext } from 'react';
import { AppData } from '../../common/app';

const AppContext = createContext<AppData | null>(null);

export interface AppDataProviderProps {
    value: Record<string, any>;
}

export function AppDataProvider({
    value,
    children,
}: PropsWithChildren<AppDataProviderProps>) {
    return (
        <AppContext.Provider value={AppData.create(value)}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppData(): AppData {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error('useAppData must be used within an AppDataProvider');
    }

    return context;
}
