import { Component } from '@angular/core';
interface ContactForm
{name: string,
 checkAdult: boolean, 
 departamment: string, 
 age: number,
 comment: string}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})

export class ContactoComponent {
model=  {
    name: '',
    checkAdult: true, 
    departamment: '', 
    age: 18,
    comment: ""}
   

onSubmit(form):void{
  console.log('form: ',form);
} 
}
