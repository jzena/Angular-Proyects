import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'tiendas-tag',
    template: `
    <p>
       <button (click)="redirect()">Redirigir al curso destacado</button>
    </p>
    <h2>Tiendas</h2>
    <p>Listado de tiendas con id</p>
    <ul>
        <li *ngFor ="let curso of cursos">
          <a [routerLink]="['/coche', curso.id]">{{curso.titulo}}</a>
        </li>
    </ul>

    <h2>Tiendas</h2>
    <p>Listado de tiendas con id y título</p>
    <ul>
        <li *ngFor ="let curso of cursos">
          <a [routerLink]="['/coche', curso.id, curso.titulo]">{{curso.titulo}}</a>
        </li>
    </ul>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class TiendasComponent {
    public cursos: Array<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.cursos = [
            { "id": 1, "titulo": "curso de symfony3" },
            { "id": 2, "titulo": "curso de framework 2" },
            { "id": 3, "titulo": "curso de php" },
            { "id": 4, "titulo": "curso de angular 2" }
        ];
    }

    redirect() {
        let curso = this.cursos[0];
        this.router.navigate(['/coche', curso.id, curso.titulo]);
    }
}