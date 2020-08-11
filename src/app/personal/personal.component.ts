import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from '../Servicios/personal.service';
import { Personal } from '../models/Personal';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  constructor() {
    this.mostrarNuevo = false;
    this.mostrarLista = true;
  }

  ngOnInit() {
  }
  mostrar(seleccionado: any) {
    if (seleccionado === 'N') {
      this.mostrarNuevo = true;
      this.mostrarLista = false;
    } else {
      if (seleccionado === 'L') {
        this.mostrarNuevo = false;
        this.mostrarLista = true;
      }
    }
  }
/*
  Personal(){
    const personal = new Personal(
    this.loginForm.get('username').value,
    this.loginForm.get('password').value
    )
    this.api.login(login).subscribe(
        user =>  {
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
*/
}
