"use strict";
var router_1 = require('@angular/router');
var coches_component_1 = require('./components/coches.component');
var tiendas_component_1 = require('./components/tiendas.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/tiendas',
        terminal: true
    },
    { path: 'tiendas', component: tiendas_component_1.TiendasComponent },
    { path: 'coches', component: coches_component_1.CochesComponent },
    { path: 'coche', component: coches_component_1.CochesComponent },
    { path: 'coche/:id', component: coches_component_1.CochesComponent },
    { path: 'coche/:id/:titulo', component: coches_component_1.CochesComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map