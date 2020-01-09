import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lapiceras',
  templateUrl: './lapiceras.component.html',
  styleUrls: ['./lapiceras.component.css']
})
export class LapicerasComponent implements OnInit {

  public descripcion1:string;
  public descripcion2:string;
  public descripcion3:string;
  public precio:number;

  constructor() {

   this.descripcion1="Bic";
   this.descripcion2="BicColores";
   this.descripcion3="Pluma";
  this.precio=10.0;
   }

  ngOnInit() {
  }

}
