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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var TiendasComponent = (function () {
    function TiendasComponent(route, router) {
        this.route = route;
        this.router = router;
        this.cursos = [
            { "id": 1, "titulo": "curso de symfony3" },
            { "id": 2, "titulo": "curso de framework 2" },
            { "id": 3, "titulo": "curso de php" },
            { "id": 4, "titulo": "curso de angular 2" }
        ];
    }
    TiendasComponent.prototype.redirect = function () {
        var curso = this.cursos[0];
        this.router.navigate(['/coche', curso.id, curso.titulo]);
    };
    TiendasComponent = __decorate([
        core_1.Component({
            selector: 'tiendas-tag',
            template: "\n    <p>\n       <button (click)=\"redirect()\">Redirigir al curso destacado</button>\n    </p>\n    <h2>Tiendas</h2>\n    <p>Listado de tiendas con id</p>\n    <ul>\n        <li *ngFor =\"let curso of cursos\">\n          <a [routerLink]=\"['/coche', curso.id]\">{{curso.titulo}}</a>\n        </li>\n    </ul>\n\n    <h2>Tiendas</h2>\n    <p>Listado de tiendas con id y t\u00EDtulo</p>\n    <ul>\n        <li *ngFor =\"let curso of cursos\">\n          <a [routerLink]=\"['/coche', curso.id, curso.titulo]\">{{curso.titulo}}</a>\n        </li>\n    </ul>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router])
    ], TiendasComponent);
    return TiendasComponent;
}());
exports.TiendasComponent = TiendasComponent;
//# sourceMappingURL=tiendas.component.js.map