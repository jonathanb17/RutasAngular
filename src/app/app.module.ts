import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';
import { LapicerasComponent } from './components/lapiceras/lapiceras.component';
import { AutosComponent } from './components/autos/autos.component';


import{FormsModule} from '@angular/forms';


 import { routing,appRoutingProviders } from './app.routing';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ZapatillasComponent,
    LapicerasComponent,
    AutosComponent,
    HomeComponent
  ],
  imports: [
 
  BrowserModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
