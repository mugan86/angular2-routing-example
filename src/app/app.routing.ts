import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Home, Detail and Contact Component
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BootstrapUiComponent } from './components/bootstrap-ui/bootstrap-ui.component';
import { BootstrapUiAccordionComponent } from './components/bootstrap-ui-accordion/bootstrap-ui-accordion.component';
import { BootstrapUiModalComponent } from './components/bootstrap-ui-modal/bootstrap-ui-modal.component';
import { BootstrapUiTooltipComponent } from './components/bootstrap-ui-tooltip/bootstrap-ui-tooltip.component';

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
    // route to detail component
    {
        path: 'layout',
        component:  LayoutComponent
    },
    // route to bootstrap ui examples component
    {
        path: 'bootstrap-ui',
        component:  BootstrapUiComponent
    },
    // route to bootstrap ui examples component
    {
        path: 'bootstrap-ui.accordion',
        component:  BootstrapUiAccordionComponent
    },
    // route to bootstrap ui examples component
    {
        path: 'bootstrap-ui.modal',
        component:  BootstrapUiModalComponent
    },
    // route to bootstrap ui examples component
    {
        path: 'bootstrap-ui.tooltip',
        component:  BootstrapUiAccordionComponent
    },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);