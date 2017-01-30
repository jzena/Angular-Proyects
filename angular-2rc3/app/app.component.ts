// Importar el núcleo de Angular
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    template: `<h1>RUTAS EN ANGULAR 2</h1>
    <nav>
    <a [routerLink]="['/coches']">Coches</a>
    <a [routerLink]="['/coche']">Coche vacio</a>
    <a [routerLink]="['/tiendas']">Tiendas</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { }