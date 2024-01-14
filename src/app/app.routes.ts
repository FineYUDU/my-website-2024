import { Routes } from '@angular/router';
import { Page404Component } from './shared/pages/page404/page404.component';

export const routes: Routes = [
    {
        path:'yudu-dev',
        loadComponent: () => import('./website/website.component'),
        children: [
            {
                path:'home',
                title:'Home',
                loadComponent: () => import('./website/pages/home/home.component')
            },
            { path:'', redirectTo:'home', pathMatch:'full' }
        ]
    },
    { path:'404', component: Page404Component },
    { path:'', redirectTo:'/yudu-dev', pathMatch:'full' },
    { path:'**', redirectTo:'/404', pathMatch:'full' }
];
