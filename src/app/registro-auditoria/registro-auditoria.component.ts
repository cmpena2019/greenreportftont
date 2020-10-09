import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalService } from '../Servicios/personal.service';
import { Personal } from '../models/Personal';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-registro-auditoria',
  templateUrl: './registro-auditoria.component.html',
  styleUrls: ['./registro-auditoria.component.css']
})
export class RegistroAuditoriaComponent implements OnInit {

  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  RegistroForm: FormGroup;
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
    //private api:PersonalService,
    private storage: StorageService
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;   
   }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';

    this.user = JSON.parse(localStorage.getItem('_user'));

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

}
