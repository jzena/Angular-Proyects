System.register(['angular2/core', "../services/restaurante.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, restaurante_service_1;
    var RestaurantesDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (restaurante_service_1_1) {
                restaurante_service_1 = restaurante_service_1_1;
            }],
        execute: function() {
            RestaurantesDetailComponent = (function () {
                function RestaurantesDetailComponent() {
                }
                RestaurantesDetailComponent = __decorate([
                    core_1.Component({
                        selector: "restaurantes-detail",
                        templateUrl: "app/view/restaurante-detail.html",
                        providers: [restaurante_service_1.RestauranteService] //Injeccion de dependencia
                    }), 
                    __metadata('design:paramtypes', [])
                ], RestaurantesDetailComponent);
                return RestaurantesDetailComponent;
            }());
            exports_1("RestaurantesDetailComponent", RestaurantesDetailComponent);
        }
    }
});
//# sourceMappingURL=dd.js.map