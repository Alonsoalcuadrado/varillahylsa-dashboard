import { Routes } from '@angular/router';

export const FULL_ROUTES: Routes = [
    {
        path: 'home',
        loadChildren: () => import ('../pages/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'nosotros',
        loadChildren: () => import ('../pages/about-us/about-us.module').then((m) => m.AboutUsModule),
    },
    {
        path: 'contacto',
        loadChildren: () => import ('../pages/contact//contact.module').then((m) => m.ContactModule),
    },
];