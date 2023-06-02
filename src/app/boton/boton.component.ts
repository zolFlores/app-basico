import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-boton',
  template: `<button  [ngStyle]="{'color': color} "> {{labell}}</button>` ,
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit, OnChanges, OnDestroy  {
@Input() color:string;
@Input() labell:string;
@Input() ciudad:string;

constructor (){}

ngOnInit(): void {
    console.log ();
  };

  ngOnDestroy(): void {
    console.log ("destroy") ;
  };

  ngOnChanges(changes: SimpleChanges): void {
    console.log ("onchanges->", changes);
  };




}
