
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({    
    selector: 'empleados',
    templateUrl: 'app/views/empleados.html' 
})
export class EmpleadosComponente {
    public titulo: string;
    
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { 
        this.titulo = "Empleados";
    }

    empresas(){
        this.router.navigate(['/empresas', 'nombre-custom']);
    }

}