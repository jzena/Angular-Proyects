import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmpleadoService } from './../services/empleado.service';
import { Empleado } from './../model/empleado';

@Component({
    selector: 'employee-edit',
    templateUrl: 'app/view/empleado-add.html',
    providers: [EmpleadoService]
})
export class EmpleadoEditComponent implements OnInit {
    public empleado: Empleado;
    public status: string;
    public errorMessage: string;
    public titulo = "Editar empleado";


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _empleadoService: EmpleadoService
    ) { }

    ngOnInit() {
        this.empleado = new Empleado(0, "", "", "", 0, "", "");
        this.getEmpleado();
    }

    getEmpleado() {
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
            this._empleadoService.getEmployeeById(id)
                .subscribe(
                result => {

                    this.empleado = result.data;
                    this.status = result.status;
                    console.log(this.empleado);
                    console.log(this.status);
                    if (this.status !== "success") {
                        alert("Error en el servidor");
                        //this._router.navigate(["/"]);
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
        });
    }

    onSubmit() {
        this._route.params.forEach((param: Params) => {
            let id = param["id"];
            this._empleadoService.editEmplyee(id, this.empleado)
                .subscribe(
                result => {
                    this.status = result.status;
                    if (this.status !== "success") {
                        alert("Error en el servidor");
                    }
                    else {
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
        });
    }


}