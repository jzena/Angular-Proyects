"use strict";
var router_1 = require("@angular/router");
var empleados_list_component_1 = require("./components/empleados-list.component");
var empleado_add_component_1 = require("./components/empleado-add.component");
var empleado_edit_component_1 = require("./components/empleado-edit.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
    },
    { path: '', component: empleados_list_component_1.EmpleadosListComponent },
    { path: 'crear-empleado', component: empleado_add_component_1.EmpleadoAddComponent },
    { path: 'editar-empleado/:id', component: empleado_edit_component_1.EmpleadoEditComponent }
];
exports.appRputingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map