// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template: `<h1>Componentes con Angular 2 !! </h1>
             <hr/>
             <nav>
                <a routerLink="/empresas/jose">Empresas</a>
                <a routerLink="/empleados">Empleados</a>
             </nav>
             <hr/>
                <router-outlet></router-outlet>
             <hr/>
             Jose Zeña
    `
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { }