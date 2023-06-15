import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template:  ` <ul>
  <li
  [ngClass]="{'alert alert-primary':city===selection}" 
  (click)="Onclicked(city)">
  {{city|uppercase}}
  </li>
`
})
export class CitiesComponent {
@Input () city:string;
@Input () selection:string;
@Output() cityClickedEvent =new EventEmitter<string>();

Onclicked(city:string){
  this.cityClickedEvent.emit(city);
}

}
