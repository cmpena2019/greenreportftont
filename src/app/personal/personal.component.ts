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
  personalForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hasError: boolean;
  errorMessage: string;
  user: any = undefined;
  personas: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private api:PersonalService,
    private storage: StorageService
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;   
  }

  ngOnInit() {

    this.personalForm = this.formBuilder.group({
      nombre:  ['', [Validators.required, Validators.minLength(5)]],  
      correo:  ['', Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      estado:  ['', [Validators.required, Validators.minLength(1)]],
      idCargo:  ['', [Validators.required, Validators.minLength(1)]],
      idContraseña:  ['', [Validators.required, Validators.minLength(8)]],
      Descripcion: ['', [Validators.required, Validators.minLength(5)]],
      
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    this.user = JSON.parse(localStorage.getItem('_user'));

    this.getPersonal()
  }
//Trae informacion del personal 
  getPersonal() {
    this.api.getPersonal()
    .subscribe(data => {
      this.personas = data
    })
  }

/// funcion para el manejo de formatos
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

// trae todos los componentes del formulario
  get f() {
    return this.personalForm.controls;
  }

  // Validacion de los campos
  Personal(){
    if (this.personalForm.invalid) {
      for (const prop in this.personalForm.controls) {
        this.personalForm.controls[prop].markAsTouched();
        console.log('this.personalForm.controls[prop] :>> ', prop, this.personalForm.controls[prop]);
      }
      return;
    }
// funcion para agregar personal
    const personal = new Personal(
    this.f.nombre.value,
    this.f.correo.value,
    this.f.estado.value,
    this.f.idCargo.value,
    this.f.idContraseña.value,
    this.f.Descripcion.value)
    console.log("personal", personal)

    this.api.Personal(personal).subscribe(
      nombre =>  {
            this.storage.create('_nombre',nombre);
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

    this.api.Usuario(personal).subscribe(
      nombre =>  {
            this.storage.create('_nombre',nombre);
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
    this.api.contraseña(personal).subscribe(
      nombre =>  {
            this.storage.create('_nombre',nombre);
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
    this.api.rol(personal).subscribe(
      nombre =>  {
            this.storage.create('_nombre',nombre);
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

    this.api.permisos(personal).subscribe(
      nombre =>  {
            this.storage.create('_nombre',nombre);
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




}
