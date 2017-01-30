import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'coches-tag',
    template: `
    <h2>DetalleCoches</h2>
    <p *ngIf="idCurso">Identificador: <strong>{{idCurso}}</strong>   </p>
    <p *ngIf="tituloCurso">Titulo: <strong>{{tituloCurso}}</strong>   </p>
    <p *ngIf="!tituloCurso && !idCurso">El curso está vacio</p>
    `
})

export class CochesComponent implements OnInit {
    public idCurso: number;
    public tituloCurso: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params["id"] != null) {
                this.idCurso = +params["id"];
            }
            if (params["titulo"] != null) {
                this.tituloCurso = params["titulo"];
            }
        });
    }
}