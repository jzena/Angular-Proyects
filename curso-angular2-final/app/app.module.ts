import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Componentes
import { AppComponent } from './app.component';
import { EmpleadosComponente } from './components/empleados.component';
import { EmpresasComponent } from './components/empresas.component';

// Rutas
import { routing, appRoutingProviders } from './app.routing'

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [AppComponent,
    EmpleadosComponente,
    EmpresasComponent],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }