import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК ДЕЛАТЬ В РЕАЛЬНЫХ ПРОЕКТАХ НЕЛЬЗЯ
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
