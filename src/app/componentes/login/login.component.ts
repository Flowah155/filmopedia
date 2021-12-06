import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/servicios/login-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;



  constructor(public userService: LoginServiceService,
    private router: Router,
    private formBuilder: FormBuilder) { 
      this.loginForm = this.formBuilder.group({
        email: ['', Validators.email],
        password: ['', Validators.required] 
    })
  }

  ngOnInit(): void {
  }
  
  get email(){
    return this.loginForm.get('email') as FormControl;
   }

   get password(){
    return this.loginForm.get('password') as FormControl;
  }

  login(contacto:any){
    this.userService.userlogin(this.loginForm.value).subscribe(respuesta=>{
      console.log(respuesta);
    })
    
    //this.router.navigateByUrl('')

  }

}
