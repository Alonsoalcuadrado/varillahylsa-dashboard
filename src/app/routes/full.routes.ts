import { Routes } from '@angular/router';

export const FULL_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import ('../pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'nosotros',
        loadChildren: () => import ('../pages/about-us/about-us.module').then((m) => m.AboutUsModule),
    },
];