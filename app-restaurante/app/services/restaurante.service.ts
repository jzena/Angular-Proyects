import { Injectable } from "angular2/core";
import { Http, Response, Headers } from "angular2/http";
import "rxjs/add/operator/map";//Mapear el resultado de un apetición ajax
import { Observable } from "rxjs/Observable";//Recoger resultado y transformarlo a json
import { Restaurante } from "../model/restaurante";

@Injectable()
export class RestauranteService {

    constructor(private _http: Http) {

    }

    getRestaurantes() {
        //return this._http.get("http://localhost/slim/restaurantes-api.php/restaurantes")
        return this._http.get("http://localhost:8080/slim/restaurantes-api.php/restaurantes")
            .map(res => res.json());
    }

    getRestaurante(id: string) {
        //return this._http.get("http://localhost/slim/restaurantes-api.php/restaurante/" + id)
        return this._http.get("http://localhost:8080/slim/restaurantes-api.php/restaurante/" + id)
            .map(res => res.json());
    }

    addRestaurante(restaurante: Restaurante) {
        let json = JSON.stringify(restaurante);
        let params = "json=" + json;
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this._http.post("http://localhost:8080/slim/restaurantes-api.php/restaurantes",
            params, { headers: headers })
            .map(res => res.json());
    }
}