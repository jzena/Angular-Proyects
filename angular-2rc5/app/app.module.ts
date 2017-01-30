// Modulos 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes
import { AppComponent } from './app.component';
import { PaisesComponent } from './components/paises.component';
import { CiudadesComponent } from './components/ciudades.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PaisesComponent, CiudadesComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }