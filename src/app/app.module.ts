import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from'@angular/forms';
import{HttpModule} from'@angular/http'

import { AppComponent } from './app.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { IngresoComponent } from './vehiculo/ingreso/ingreso.component';
import { IngresoListComponent } from './vehiculo/ingreso-list/ingreso-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculoComponent,
    IngresoComponent,
    IngresoListComponent
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
