import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Empleado } from '../model/empleado';

@Injectable()
export class EmpleadoService {
    public urlEmployee: string = "http://localhost/CRUDMVC5Eemployee/api/ManageEmployee/";
    constructor(private _http: Http) {
    }

    getEmployee() {
        return this._http.get(this.urlEmployee + "")
            .map(res => res.json());
    }

    addEmployee(empleado: Empleado) {
        let json = JSON.stringify(empleado);
        let params = "json=" + json;
        let headers = new Headers({ 'content-type': 'application/x-www-form-urlencoded' });

        console.log(params);
        return this._http.post(this.urlEmployee + "PostEmployee",
            params, { headers: headers })
            .map(res => res.json());
    }
}