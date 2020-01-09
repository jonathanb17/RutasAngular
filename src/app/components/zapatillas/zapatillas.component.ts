import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css']
})
export class ZapatillasComponent implements OnInit {

  public descripcion1:string;
  public descripcion2:string;
  public descripcion3:string;
  public precio:number;

  constructor() {
    this.descripcion1="Adidas";
    this.descripcion2="Nike";
    this.descripcion3="Converse";
    this.precio=25.30;
   }

  ngOnInit() {
  }

}
