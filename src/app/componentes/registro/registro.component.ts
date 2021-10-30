import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup
  
  constructor(private _builder: FormBuilder) {

    this.registroForm = this._builder.group({
      username: ['',Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
      passwordConfirm: ['',Validators.required]
    })

   }

   enviar(values: any){
    console.log(values);
   }

   get username(){
    return this.registroForm.get('username') as FormControl;
   }

   get email(){
    return this.registroForm.get('email') as FormControl;
   }

   get password(){
    return this.registroForm.get('password') as FormControl;
  }

  get passwordConfirm(){
    return this.registroForm.get('passwordConfirm') as FormControl;
   }

  ngOnInit(): void {
  }

}
