import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/Customer';
import { Login, LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  employee = {} as Login;



  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient,private log:LoginService) {

    this.loginForm = this.formBuilder.group({
      userId: ['', [Validators.required,]],
      password: ['', Validators.required]
    });

  }
get userId(){
  return this.loginForm.get('userId');
}
get password(){
  return this.loginForm.get('password');
}


  onSubmit() {
    if(this.loginForm.invalid){
      alert('Please fill all required fields with valid data.');
      return;
    }
    else{
    this.log.verifyLogin(this.loginForm.value).subscribe(data => {
      sessionStorage.setItem('Token',JSON.stringify(data));
      this.log.isLoggedIn=true;
      this.router.navigate(['/music']);

    },error => {
      alert ("wrong userid and password");
    })
}
  }

}



