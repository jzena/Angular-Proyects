
// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { routing, appRputingProviders } from './app.routing';

import { EmpleadosListComponent } from './components/empleados-list.component';
import { EmpleadoAddComponent } from './components/empleado-add.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, routing],
  declarations: [AppComponent,
    EmpleadosListComponent,
    EmpleadoAddComponent],
  providers: [appRputingProviders],
  bootstrap: [AppComponent]
})

export class AppModule { }