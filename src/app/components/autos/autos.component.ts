import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit {

  public descripcion1:string;
  public descripcion2:string;
  public descripcion3:string;
  public precio:number;

  constructor() { 

    this.descripcion1="Fiat 128";
    this.descripcion2="Fiat uno";
    this.descripcion3="Renault 12";
    this.precio=12.000;
  }

  ngOnInit() {
  }

}
