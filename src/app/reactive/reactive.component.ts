import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
 contactForm: FormGroup;

 constructor(private readonly fb: FormBuilder){}

 ngOnInit(): void {
     this.contactForm=this.initForm();
 }
 
 onSubmit(){}

    initForm ():FormGroup{
      return this.fb.group({
        name:['',[Validators.required, Validators.minLength(3)]],
        checkAdult: [],
        age: [],
        departament:['',[Validators.required]],
        comment:['',[Validators.required, Validators.maxLength(150)]]
      })
    }
  }

