import { Injectable } from "angular2/core";
import { Http, Response, Headers } from "angular2/http";
import "rxjs/add/operator/map";//Mapear el resultado de un apetición ajax
import { Observable } from "rxjs/Observable";//Recoger resultado y transformarlo a json
import { Restaurante } from "../model/restaurante";

@Injectable()
export class RestauranteService {
    //public urlAPI: string = "http://localhost/slim/restaurantes-api.php/";
    public urlAPI: string = "http://localhost:8080/slim/restaurantes-api.php/";
    constructor(private _http: Http) {

    }

    getRestaurantes() {
        return this._http.get(this.urlAPI + "restaurantes")
            .map(res => res.json());
    }

    getRestaurante(id: string, random = null) {
        if (random == null) {
            return this._http.get(this.urlAPI + "restaurante/" + id)
                .map(res => res.json());
        }
        else {
            return this._http.get(this.urlAPI + "random-restaurante")
                .map(res => res.json());
        }
    }

    addRestaurante(restaurante: Restaurante) {
        let json = JSON.stringify(restaurante);
        let params = "json=" + json;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this._http.post(this.urlAPI + "restaurantes",
            params, { headers: headers })
            .map(res => res.json());
    }

    editRestaurante(id: string, restaurante: Restaurante) {
        let json = JSON.stringify(restaurante);
        let params = "json=" + json;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this._http.post(this.urlAPI + "update-restaurante/" + id,
            params, { headers: headers })
            .map(res => res.json());
    }

    deleteRestaurante(id: string) {
        return this._http.get(this.urlAPI + "delete-restaurante/" + id)
            .map(res => res.json());
    }
}