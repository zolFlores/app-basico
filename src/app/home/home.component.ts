import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

nombre!:string;
seleccion= "Deshabilitado";
cities=['mexico', 'rusia','china', 'usa', 'brazil'];
ciudad!:string;
criterio: string;

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
