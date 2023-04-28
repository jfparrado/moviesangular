import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  email: string =''; // define the email property
  password: string=''; // define the password property
  formLogin: FormGroup; //se crea el formulario

  constructor(//inyectamos el servicio
  private userService: UserService,
  private router: Router
  ) { 
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        console.log(response);
        this.router.navigate(['/'])
      })
      .catch(error => {
        console.log(error)
        alert(error.message)
      });
  }
  googleLogin(){
    this.userService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['/'])
    })
    .catch(error=> console.log(error))
  }
}


