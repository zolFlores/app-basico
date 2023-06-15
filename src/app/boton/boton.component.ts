import { Component, Input, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-boton',
  template: `<button  [ngStyle]="{'color': color} "> {{labell}}</button>` ,
  styleUrls: ['./boton.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BotonComponent   {
@Input() color:string;
@Input() labell:string;
@Input() ciudad:string;

constructor (){}


}
