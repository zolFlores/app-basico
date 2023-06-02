import { Component } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent {

nombre!:string;
seleccion= "Deshabilitado";
cities=['mexico', 'rusia','china', 'usa', 'brazil'];
ciudad!:string;
letrero(event: Event) {
  if (this.seleccion =="Habilitado"){
    this.seleccion= "Deshabilitado";
  }else {
    this.seleccion="Habilitado";
  }
}

addCiudad(ciudad: string):void{
 this.cities.push (ciudad);
}

Unclick(){
  this.ciudad='';
}

Onclicked(ciudad:string){
  this.ciudad=ciudad;
}
}
