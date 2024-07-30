import { Routes, ExtraOptions} from '@angular/router';

import { Page404Component } from './shared/pages/page404/page404.component';

export const routes: Routes = [
    {
        path:'',
        loadComponent: () => import('./website/website.component'),
        children: [
            {
                path:'about',
                title:'About',
                loadComponent: () => import('./website/pages/about/about.component')
            },
            {
                path:'contact',
                title:'Contact',
                loadComponent: () => import('./website/pages/contact/contact.component')
            },
            {
                path:'contact-submit',
                title:'Contact success',
                loadComponent: () => import('./website/pages/contact-submited/contact-submited.component')
            },
            { path:'', redirectTo:'about', pathMatch:'full' },
        ]
    },
    { path:'404', component: Page404Component },
    { path:'', redirectTo:'', pathMatch:'full' },
    { path:'**', redirectTo:'/404', pathMatch:'full' }
];
const routerOptions : ExtraOptions = {
    scrollPositionRestoration:'enabled',
    anchorScrolling:'enabled',
}