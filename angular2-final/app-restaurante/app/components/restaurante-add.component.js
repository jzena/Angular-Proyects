"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var restaurante_service_1 = require("../services/restaurante.service");
var restaurante_1 = require("../model/restaurante");
var RestauranteAddComponent = (function () {
    function RestauranteAddComponent(_route, _router, _restauranteService) {
        this._route = _route;
        this._router = _router;
        this._restauranteService = _restauranteService;
        this.titulo = "Crear nuevo restaurante";
    }
    RestauranteAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._restauranteService.addRestaurante(this.restaurante)
            .subscribe(function (response) {
            _this.status = response.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            else {
                _this._router.navigate(["/"]);
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    RestauranteAddComponent.prototype.ngOnInit = function () {
        this.restaurante = new restaurante_1.Restaurante(0, "", "", "", "null", "bajo");
        console.log("Componente restaurante add cargado");
    };
    RestauranteAddComponent.prototype.callPrecio = function (value) {
        this.restaurante.precio = value;
    };
    //Interactuar con la vista para subir los ficheros
    RestauranteAddComponent.prototype.fileChangeevent = function (fileInput) {
        var _this = this;
        this.filesToUpload = fileInput.target.files;
        //let url = "http://localhost/slim/restaurantes-api.php/upload-file";
        var url = "http://localhost:8080/slim/restaurantes-api.php/upload-file";
        this.makeFileRequest(url, [], this.filesToUpload).then(function (result) {
            _this.resultUpload = result;
            _this.restaurante.imagen = _this.resultUpload.filename;
            console.log(_this.resultUpload.filename);
        }, function (error) {
            console.log(error);
        });
    };
    //enviar el post con los ficheros al servidor
    RestauranteAddComponent.prototype.makeFileRequest = function (url, params, files) {
        return new Promise(function (resolve, reject) {
            var formData = new FormData();
            var xhr = new XMLHttpRequest();
            for (var i = 0; i < files.length; i++) {
                formData.append("uploads[]", files[i], files[i].name);
            }
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        resolve(JSON.parse(xhr.response));
                    }
                    else {
                        reject(xhr.response);
                    }
                }
            };
            xhr.open("POST", url, true);
            xhr.send(formData);
        });
    };
    return RestauranteAddComponent;
}());
RestauranteAddComponent = __decorate([
    core_1.Component({
        selector: "restaurantes-add",
        templateUrl: "app/view/restaurante-add.html",
        providers: [restaurante_service_1.RestauranteService] //Injeccion de dependencia
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        restaurante_service_1.RestauranteService])
], RestauranteAddComponent);
exports.RestauranteAddComponent = RestauranteAddComponent;
//# sourceMappingURL=restaurante-add.component.js.map