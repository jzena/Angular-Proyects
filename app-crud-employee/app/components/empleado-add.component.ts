
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmpleadoService } from './../services/empleado.service';
import { Empleado } from './../model/empleado';

@Component({
    selector: 'empleado-app',
    templateUrl: 'app/view/empleado-add.html',
    providers: [EmpleadoService]
})
export class EmpleadoAddComponent implements OnInit {
    public empleado: Empleado;
    public status: string;
    public errorMessage: string;
    public titulo = "Crear nuevo Empleado";

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _empleadoService: EmpleadoService
    ) { }

    ngOnInit() {
        this.empleado = new Empleado(0, "", "", "", 0, "", "");
    }

    onSubmit() {
        this._empleadoService.addEmployee(this.empleado)
            .subscribe(
            response => {
                this.status = response.status;
                if (this.status !== "success") {
                    alert("Error en el servidor");
                }
                else {
                    //console.log(response);
                    this._router.navigate(["/"]);
                }
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage !== null) {
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            }
            );
    }
}