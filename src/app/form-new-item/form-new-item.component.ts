import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css']
})
export class FormNewItemComponent {
  @Input() label:string;
  @Input() className: string;

  @Output() newItemEvent= new EventEmitter<string>();

onAddNewItem (item:string):void{
  this.newItemEvent.emit(item);
  
}

}
