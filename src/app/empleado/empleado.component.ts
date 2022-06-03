import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: '<p style="text-align: center;">Empleado</p>',
  styleUrls: ['./empleado.component.css']
  //styles: ["p {background-color: azure;}"]
})
export class EmpleadoComponent implements OnInit {

  private nombre = "Santiago";
  private apellido = "Viana";
  private edad = 17;
  public empresa="Sofka";

  habilitacionCuadro = false;
  usoRegistrado = false;
  textoDeRegistro = "No hay nadie registrado";

  getRegistroUsuario() {
    this.usoRegistrado= false;
  }

  getNombre() {
    return this.nombre;
  }
  getApellido() {
    return this.apellido;
  }
  getEdad() {
    return this.edad;
  }
  getEmpresa() {
    return this.empresa;
  }

  llamaEmpresa(value:String) {
    
  }


  setUsuarioRegistrado(e:Event) {
    //alert ("El usuario se acaba de registrar");
    //this.textoDeRegistro = "el usuario se acaba de registrar";
    //alert(e.target)
    if ((<HTMLInputElement> e.target).value == 'si') {
      this.textoDeRegistro = "el usuario se acaba de registrar";
    } // Es el tipo de objeto del elemento, se castea para poder acceder a sus propiedades
    if ((<HTMLInputElement> e.target).value == 'no') {
      this.textoDeRegistro = "el usurio ya no está registrado"
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
