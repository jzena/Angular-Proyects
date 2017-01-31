import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ciudades',
    template: `
    <h2>Ciudades</h2>
    <ul *ngIf="!codigoPostal">
       <li>Murcia</li>
       <li>Valencia</li>
       <li>Barcelona</li>
       <li>Quito</li>
       <li>Mexico DF</li>              
    </ul>

    <p *ngIf="codigoPostal">Código postal: {{codigoPostal}}</p>
    <button (click)="redireccion()">Ver paises</button>
    `
})
export class CiudadesComponent {
    public codigoPostal: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        // recoger parametros url
        this.route.params.subscribe(
            params => {
                if (params['id'] != null) {
                    this.codigoPostal = +params['id'];
                }
            }
        );
    }

    redireccion() {
        this.router.navigate(['/paises']);
    }
}