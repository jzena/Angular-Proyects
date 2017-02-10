import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { Empleado } from '../model/empleado';

@Injectable()
export class EmpleadoService {
    //public urlEmployee: string = "http://localhost/CRUDMVC5Eemployee/api/ManageEmployee/";
    public urlEmployee: string = "http://localhost:50873/api/ManageEmployee/";
    constructor(private _http: Http) {
    }

    getEmployee() {
        return this._http.get(this.urlEmployee + "")
            .map(res => res.json());
    }

    addEmployee(empleado: Empleado) {
        //var data = { Name : empleado.Name};
        //data.Name = empleado.Name;

        //let params = JSON.stringify(data);

        //Search on google: API controller : get JSON object from HTTP body
        //http://stackoverflow.com/questions/14407458/webapi-multiple-put-post-parameters
        //http://www.dotnetcurry.com/aspnet/1278/aspnet-webapi-pass-multiple-parameters-action-method

        let json = JSON.stringify(empleado);
        let params = "json=" + json;
        let headers = new Headers({ 'content-type': 'application/x-www-form-urlencoded' });

        console.log(params);
        return this._http.post(this.urlEmployee + "PostEmployee",
            params, { headers: headers })
            .map(res => res.json());
    }
}