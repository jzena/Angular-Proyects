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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var EmpleadoService = (function () {
    //public urlEmployee: string = "http://localhost:50873/api/ManageEmployee/";
    function EmpleadoService(_http) {
        this._http = _http;
        this.urlEmployee = "http://localhost/CRUDMVC5Eemployee/api/ManageEmployee/";
    }
    EmpleadoService.prototype.getEmployee = function () {
        return this._http.get(this.urlEmployee + "")
            .map(function (res) { return res.json(); });
    };
    EmpleadoService.prototype.getEmployeeById = function (id) {
        return this._http.get(this.urlEmployee + "GetByID/" + id)
            .map(function (res) { return res.json(); });
    };
    EmpleadoService.prototype.addEmployee = function (empleado) {
        //var data = { Name : empleado.Name};
        //data.Name = empleado.Name;
        //let params = JSON.stringify(data);
        //Search on google: API controller : get JSON object from HTTP body
        //http://stackoverflow.com/questions/14407458/webapi-multiple-put-post-parameters
        //http://www.dotnetcurry.com/aspnet/1278/aspnet-webapi-pass-multiple-parameters-action-method
        var json = JSON.stringify(empleado);
        var params = "json=" + json;
        var headers = new http_1.Headers({ 'content-type': 'application/x-www-form-urlencoded' });
        //console.log(params);
        return this._http.post(this.urlEmployee + "AddEmployee", params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EmpleadoService.prototype.editEmplyee = function (id, empleado) {
        var json = JSON.stringify(empleado);
        var params = "json=" + json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        //console.log(params);
        return this._http.post(this.urlEmployee + "EditEmployee/" + id, params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    EmpleadoService.prototype.deleteEmployee = function (id) {
        return this._http.get(this.urlEmployee + "DeleteEmployee/" + id)
            .map(function (res) { return res.json(); });
    };
    return EmpleadoService;
}());
EmpleadoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmpleadoService);
exports.EmpleadoService = EmpleadoService;
//# sourceMappingURL=empleado.service.js.map