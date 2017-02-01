import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'empresas',
    template: `
          <h2>{{titulo}}</h2>
          <p *ngIf="!nombre">Listado de empresas</p>
          <p *ngIf="nombre">            
            <span>{{nombre}}</span>
            <br/>
            <input type="button" (click)="empleados()" value="Ver empleados"/>
          </p>
    `
})

export class EmpresasComponent {
    public titulo: string;
    public nombre: string;
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.titulo = "Empresas";
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.nombre = params['nombre'];
        });
    }

    empleados(){
        this.router.navigate(['/empleados']);
    }

}