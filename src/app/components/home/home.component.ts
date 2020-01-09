import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo:string;
  public subtitulo:string;
  public email:string;

  constructor() {

      this.titulo="Jonathan Bustamante";
      this.subtitulo="Desarrollador frontend";
      this.email="bustamantejonathanandres@gmail.com";

   }

  ngOnInit() {
  }

}
