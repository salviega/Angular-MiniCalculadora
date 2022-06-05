import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MiniCalculadora';
  titulo = "registro de usuarios";
  mensaje = "...";
  registrado = false; 
  numero1:number = 0;
  numero2:number = 0;
  resultado:number = 0;
  nombre = "";
  apellido = "";
  cargo:string = "";
  entradas: any[]=[
    {titulo:"python vsfs dìa màs presente"},
    {titulo:"java desde los 20"},
    {titulo:"Kotlin más fuerte para tus apps"},
    {titulo:"web3 se acerca"},
    {titulo:"Oracle dueño de java"}
  ];


  constructor() {
    
  }

  registradoUsuario():void {
    this.registrado = true;
    this.mensaje="usuario registrando";

  }
  sumar():void {

    this.resultado = this.numero1 + this.numero2;
  }
  restar():void {

    this.resultado = this.numero1 - this.numero2;
  }
  multiplicar():void {

    this.resultado = this.numero1 * this.numero2;
  }
  dividir():void {

    this.resultado = this.numero1 / this.numero2;
  }
  
}
