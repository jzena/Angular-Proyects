"use strict";
var router_1 = require("@angular/router");
var empresas_component_1 = require("./components/empresas.component");
var empleados_component_1 = require("./components/empleados.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/empresas',
        pathMatch: 'full'
    },
    { path: 'empresas', component: empresas_component_1.EmpresasComponent },
    { path: 'empresas/:nombre', component: empresas_component_1.EmpresasComponent },
    { path: 'empleados', component: empleados_component_1.EmpleadosComponente }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map