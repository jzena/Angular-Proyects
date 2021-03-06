import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RestauranteService } from "../services/restaurante.service";
import { Restaurante } from "../model/restaurante";

@Component({
    selector: ".-edit",
    templateUrl: "app/view/restaurante-add.html",
    providers: [RestauranteService]//Injeccion de dependencia
})

export class RestauranteEditComponent implements OnInit {
    public restaurante: Restaurante;
    public status: string;
    public errorMessage: string;
    public titulo = "Editar restaurante";
    public filesToUpload: Array<File>;
    public resultUpload;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _restauranteService: RestauranteService
    ) { }

    onSubmit() {
        this._route.params.forEach((params: Params) => {

            let id = params["id"];
            this._restauranteService.editRestaurante(id, this.restaurante)
                .subscribe(
                response => {
                    this.status = response.status;
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

    ngOnInit() {
        this.restaurante = new Restaurante(0, "", "", "", "null", "bajo");
        this.getRestaurante();
    }

    getRestaurante() {
        this._route.params.forEach((params: Params) => {

            let id = params["id"];
            this._restauranteService.getRestaurante(id)
                .subscribe(
                response => {
                    this.restaurante = response.data;
                    this.status = response.status;
                    if (this.status !== "success") {
                        //alert("Error en el servidor");
                        this._router.navigate(["/"]);
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

    callPrecio(value) {
        this.restaurante.precio = value;
    }

    //Interactuar con la vista para subir los ficheros
    fileChangeevent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        //let url = "http://localhost/slim/restaurantes-api.php/upload-file";
        let url = "http://localhost:8080/slim/restaurantes-api.php/upload-file";
        this.makeFileRequest(url, [], this.filesToUpload).then(
            (result) => {
                this.resultUpload = result;
                this.restaurante.imagen = this.resultUpload.filename;
                console.log(this.resultUpload.filename);
            },
            (error) => {
                console.log(error);
            });
    }

    //enviar el post con los ficheros al servidor
    makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {
            var formData: any = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {//ok
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            }
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    }
}
