import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';
import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurante";

@Component({
    selector: "restaurantes-edit",
    templateUrl: "app/view/restaurante-add.html",
    providers: [RestauranteService]//Injeccion de dependencia
})

export class RestauranteEditComponent implements OnInit {
    public restaurante: Restaurante;
    public status: string;
    public errorMessage: string;
    public titulo = "Editar restaurante";

    constructor(
        private _restauranteService: RestauranteService,
        private _routeParams: RouteParams,
        private _router: Router
    ) { }

    onSubmit() {
        let id = this._routeParams.get("id");
        this._restauranteService.editRestaurante(id, this.restaurante)
            .subscribe(
            response => {
                this.status = response.status;
                if (this.status !== "success") {
                    alert("Error en el servidor");

                }
                else {
                    this._router.navigate(["Home"]);
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
    ngOnInit() {
        this.restaurante = new Restaurante(
            parseInt(this._routeParams.get("id")),
            this._routeParams.get("nombre"),
            this._routeParams.get("direccion"),
            this._routeParams.get("descripcion"),
            "null",
            this._routeParams.get("precio")
        );
        this.getRestaurante();
    }

    getRestaurante() {
        let id = this._routeParams.get("id");
        this._restauranteService.getRestaurante(id)
            .subscribe(
            response => {
                this.restaurante = response.data;
                this.status = response.status;
                if (this.status !== "success") {
                    //alert("Error en el servidor");
                    this._router.navigate(["Home"]);
                }
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

    callPrecio(value) {
        this.restaurante.precio = value;
    }
}
