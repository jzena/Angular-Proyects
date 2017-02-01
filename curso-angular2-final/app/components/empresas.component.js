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
var EmpresasComponent = (function () {
    function EmpresasComponent(route, router) {
        this.route = route;
        this.router = router;
        this.titulo = "Empresas";
    }
    EmpresasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            _this.nombre = params['nombre'];
        });
    };
    EmpresasComponent.prototype.empleados = function () {
        this.router.navigate(['/empleados']);
    };
    return EmpresasComponent;
}());
EmpresasComponent = __decorate([
    core_1.Component({
        selector: 'empresas',
        template: "\n          <h2>{{titulo}}</h2>\n          <p *ngIf=\"!nombre\">Listado de empresas</p>\n          <p *ngIf=\"nombre\">            \n            <span>{{nombre}}</span>\n            <br/>\n            <input type=\"button\" (click)=\"empleados()\" value=\"Ver empleados\"/>\n          </p>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], EmpresasComponent);
exports.EmpresasComponent = EmpresasComponent;
//# sourceMappingURL=empresas.component.js.map