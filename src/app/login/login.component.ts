import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../Servicios/login.service';
import { Login } from '../models/login';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hasError: boolean;
  errorMessage: string;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private api:LoginService,
      private storage: StorageService
  ) {

  }
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
          password: ['', [Validators.required, Validators.minLength(8)]]
      });
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login(){
      const login = new Login(
      this.loginForm.get('username').value,
      this.loginForm.get('password').value
      )
      this.api.login(login).subscribe(
          user =>  {
              localStorage.setItem('_user',JSON.stringify(user));
              this.storage.create('_user',user);
              this.router.navigate([this.returnUrl]);
          }, ({error}) => { 
              if (error){
                this.hasError = true;
                this.errorMessage = error.error;
                console.log(error);
                setTimeout(() => {
                  this.hasError = false;
                  this.errorMessage = '';
                }, 3000);
              }
            }      
      )
  }

  get f() { return this.loginForm.controls; }
  onSubmit() {
      this.router.navigate([this.returnUrl]);
  }

}
