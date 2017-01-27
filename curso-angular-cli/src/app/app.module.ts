import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { ContacComponent } from './components/contac/contac.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    ContacComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
