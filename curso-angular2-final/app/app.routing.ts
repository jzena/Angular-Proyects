
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpresasComponent } from './components/empresas.component';
import { EmpleadosComponente } from './components/empleados.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/empresas',
        pathMatch: 'full'
    },
    { path: 'empresas', component: EmpresasComponent },
    { path: 'empresas/:nombre', component: EmpresasComponent },
    { path: 'empleados', component: EmpleadosComponente }
];

export const appRoutingProviders: any[] = [];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);