import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurante";

@Component({
    selector: "restaurantes-detail",
    templateUrl: "../view/restaurante-detail.html",
    providers: [RestauranteService]//Injeccion de dependencia
})

export class RestaurantesDetailComponent implements OnInit {
    public restaurante: Restaurante;
    public status: string;
    public errorMessage: string;
    //public urlImage: string ="http://localhost/slim/uploads/";
    public urlImage: string = "http://localhost:8080/slim/uploads/";
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _restauranteService: RestauranteService
    ) { }

    ngOnInit() {
        this.getRestaurante();
    }

    getRestaurante() {
        this._route.params.forEach((params: Params) => {
            let id = params["id"];
            let random = params["random"];

            this._restauranteService.getRestaurante(id, random)
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
        });

    }
}