
//importar modulos
import{ModuleWithProviders} from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

// importamos los compoenentes
HomeComponent
import { AutosComponent } from './components/autos/autos.component';
import { LapicerasComponent } from './components/lapiceras/lapiceras.component';
import { ZapatillasComponent } from './components/zapatillas/zapatillas.component';
import { HomeComponent } from './components/home/home.component';



const rutas:Routes=[
    {path:'home',component:HomeComponent},
    {path:'lapiceras',component:LapicerasComponent},
    {path:'autos',component:AutosComponent},
    {path:'zapa',component:ZapatillasComponent},
    {path:'**',component:HomeComponent}
];


export const appRoutingProviders :any[]=[];

export const routing :ModuleWithProviders= RouterModule.forRoot(rutas);