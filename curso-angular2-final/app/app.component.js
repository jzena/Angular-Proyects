"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Importar Component desde el núcleo de Angular
var core_1 = require("@angular/core");
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var AppComponent = (function () {
    // Clase del componente donde irán los datos y funcionalidades
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Componentes con Angular 2 !! </h1>\n             <hr/>\n             <nav>\n                <a routerLink=\"/empresas/jose\">Empresas</a>\n                <a routerLink=\"/empleados\">Empleados</a>\n             </nav>\n             <hr/>\n                <router-outlet></router-outlet>\n             <hr/>\n             Jose Ze\u00F1a\n    "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map