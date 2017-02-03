
// Modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadosListComponent } from './components/empleados-list.component';
import { EmpleadoAddComponent } from './components/empleado-add.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {path: '', component: EmpleadosListComponent},
    {path: 'crear-empleado', component: EmpleadoAddComponent}
];

export const appRputingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);