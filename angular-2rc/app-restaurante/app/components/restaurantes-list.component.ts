import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurante";

@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html",
    directives: [ROUTER_DIRECTIVES],
    providers: [RestauranteService]//Injeccion de dependencia
})

export class RestaurantesListComponent implements OnInit {
    public titulo: string = "Listado de restaurantes:";
    public restaurantes: Restaurante[];
    public status: string;
    public errorMessage: string;
    public loading;
    public confirmado;
    //public urlImage: string ="http://localhost/slim/uploads/";
    public urlImage: string ="http://localhost:8080/slim/uploads/";

    constructor(private _restauranteService: RestauranteService) {

    }

    ngOnInit() {
        this.loading = 'show';
        this.getRestaurantes();
        console.log("restaurantes-list component cargado...");
    }

    getRestaurantes() {
        //let box_restaurantes = <HTMLElement>document.querySelector("#restaurantes-list .loading")
        //box_restaurantes.style.visibility = "visible";

        //subscribe: recoger el resultado y capturar los errores
        this._restauranteService.getRestaurantes()
            .subscribe(
            result => {
                this.restaurantes = result.data;
                this.status = result.status;
                if (this.status !== "success") {
                    alert("Error en el servidor");
                }

                //box_restaurantes.style.display = "none";
                this.loading = 'hide';
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

    onBorrarConfirm(id) {
        this.confirmado = id;
    }

    OnCancelarConfirm(){
        this.confirmado = null;
    }

    onBorrarRestaurante(id) {
        this._restauranteService.deleteRestaurante(id)
            .subscribe(
            result => {
                this.status = result.status;
                if (this.status !== "success") {
                    alert("Error en el servidor");
                }
                this.getRestaurantes();
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