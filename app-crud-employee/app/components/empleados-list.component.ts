import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { EmpleadoService } from '../services/empleado.service';
import { Empleado } from '../model/empleado';

@Component({
    selector: 'empleados-list',
    templateUrl: 'app/view/empleados-list.html',
    providers: [EmpleadoService]
})
export class EmpleadosListComponent implements OnInit {
    public titulo: string = "Listado de empleados";
    public lstEmpleados: Empleado[];
    public status: string;
    public errorMessage: string;
    public loading;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _empleadoService: EmpleadoService
    ) { }

    ngOnInit() {
        this.loading = 'show';
        this.getEmpleados();
    }

    getEmpleados() {
        this._empleadoService.getEmployee()
            .subscribe(
            result => {
                //console.log(result);
                this.lstEmpleados = result.data;
                this.status = result.status;
                if (this.status !== "success") {
                    alert("Error en el servidor");
                }
                this.loading = 'hide';
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

    onDelete(id) {
        this._empleadoService.deleteEmployee(id)
        .subscribe(
            result=> {
                this.status = result.status;
                if (this.status !== "success") {
                    alert("Error en el servidor");
                }
                this.getEmpleados();
            },
            error => {
                this.errorMessage = <any>error;
                if (this.errorMessage !== null) {
                    console.log(this.errorMessage);
                    alert("Error en la peticion");
                }
            }
        );
    }
}