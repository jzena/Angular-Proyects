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
var empleado_service_1 = require("../services/empleado.service");
var EmpleadosListComponent = (function () {
    function EmpleadosListComponent(_route, _router, _empleadoService) {
        this._route = _route;
        this._router = _router;
        this._empleadoService = _empleadoService;
        this.titulo = "Listado de empleados";
    }
    EmpleadosListComponent.prototype.ngOnInit = function () {
        this.loading = 'show';
        this.getEmpleados();
    };
    EmpleadosListComponent.prototype.getEmpleados = function () {
        var _this = this;
        this._empleadoService.getEmployee()
            .subscribe(function (result) {
            //console.log(result);
            _this.lstEmpleados = result.data;
            _this.status = result.status;
            if (_this.status !== "success") {
                alert("Error en el servidor");
            }
            _this.loading = 'hide';
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage !== null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    return EmpleadosListComponent;
}());
EmpleadosListComponent = __decorate([
    core_1.Component({
        selector: 'empleados-list',
        templateUrl: 'app/view/empleados-list.html',
        providers: [empleado_service_1.EmpleadoService]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        empleado_service_1.EmpleadoService])
], EmpleadosListComponent);
exports.EmpleadosListComponent = EmpleadosListComponent;
//# sourceMappingURL=empleados-list.component.js.map