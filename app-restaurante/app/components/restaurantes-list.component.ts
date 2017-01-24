import { Component } from 'angular2/core';

@Component({
    selector: "restaurantes-list",
    templateUrl: "app/view/restaurantes-list.html"
})

export class RestaurantesListComponent {
    public titulo: string = "Listado de restaurantes:";
}