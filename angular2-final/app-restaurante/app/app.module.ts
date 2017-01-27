import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';

import { RestaurantesListComponent } from './components/restaurantes-list.component';
import { RestaurantesDetailComponent } from './components/restaurantes-detail.component';
import { RestauranteAddComponent } from './components/restaurante-add.component';
import { RestauranteEditComponent } from './components/restaurante-edit.component';

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule, routing],//modulos internos de forma global
    declarations: [
        AppComponent,
        RestaurantesListComponent,
        RestaurantesDetailComponent,
        RestauranteEditComponent,
        RestauranteAddComponent
    ],//directivas y componentes
    providers: [appRoutingProviders],//para las rutas
    bootstrap: [AppComponent]//cargar componente principal de la aplicacion
})

export class AppModule { }