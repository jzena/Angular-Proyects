// Importar Component desde el núcleo de Angular
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: "mi-app",
    templateUrl: "./view/home.html"
})

// Clase del componente donde irán los datos y funcionalidades
export class AppComponent {
    titulo: string = "Restaurantes";
}
