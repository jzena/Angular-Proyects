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
var empleado_service_1 = require("./../services/empleado.service");
var empleado_1 = require("./../model/empleado");
var EmpleadoAddComponent = (function () {
    function EmpleadoAddComponent(_route, _router, _empleadoService) {
        this._route = _route;
        this._router = _router;
        this._empleadoService = _empleadoService;
        this.titulo = "Crear nuevo Empleado";
    }
    EmpleadoAddComponent.prototype.ngOnInit = function () {
        this.empleado = new empleado_1.Empleado(0, "", "", "", 0, "", "");
    };
    EmpleadoAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._empleadoService.addEmployee(this.empleado)
            .subscribe(function (response) {
            _this.status = response.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            else {
                //console.log(response);
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
    return EmpleadoAddComponent;
}());
EmpleadoAddComponent = __decorate([
    core_1.Component({
        selector: 'empleado-app',
        templateUrl: 'app/view/empleado-add.html',
        providers: [empleado_service_1.EmpleadoService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        empleado_service_1.EmpleadoService])
], EmpleadoAddComponent);
exports.EmpleadoAddComponent = EmpleadoAddComponent;
//# sourceMappingURL=empleado-add.component.js.map