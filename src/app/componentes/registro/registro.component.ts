import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { CrudService } from 'src/app/servicios/crud.service';
import { MessageService } from 'src/app/servicios/message.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm: FormGroup;
  
  title = 'nodeMailerApp';

  constructor(private _builder: FormBuilder, private crudService:CrudService, public messageService:MessageService) {}

   enviar(values: any){
    console.log(values);
    this.crudService.AgregarUser(this.registroForm.value).subscribe();

    let email = this.registroForm.value.email;
    let reqObj = {
      email:email
    }
    this.messageService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
      
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



  ngOnInit(): void {
    this.registroForm = this._builder.group({
      username: ['',Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required],
    })
  }

}
