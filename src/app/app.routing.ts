import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Home, Detail and Contact Component
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
        // take '/' route and send to 'home'
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
        
        // route to home
    {
        path: 'home',
        component:  HomeComponent
    },
    // route to detail component
    {
        path: 'detail',
        component:  DetailComponent
    },
    // route to detail component
    {
        path: 'contact',
        component:  ContactComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);