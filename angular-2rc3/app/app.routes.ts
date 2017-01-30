import { provideRouter, RouterConfig } from '@angular/router';
import { CochesComponent } from './components/coches.component';
import { TiendasComponent } from './components/tiendas.component';

export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/tiendas',
        terminal: true
    },
    { path: 'tiendas', component: TiendasComponent },
    { path: 'coches', component: CochesComponent },
    { path: 'coche', component: CochesComponent },
    { path: 'coche/:id', component: CochesComponent },
    { path: 'coche/:id/:titulo', component: CochesComponent }
    
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];