import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {StorageService} from '../Servicios/storage.service'
import { MaterialService } from '../Servicios/material.service';


@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.component.html',
  styleUrls: ['./materiales.component.css']
})
export class MaterialesComponent implements OnInit {

  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  personalForm: FormGroup;
  submitted = false;
  returnUrl: string;
  hasError: boolean;
  errorMessage: string;
  user: any = undefined;
  material: any = undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageService,
    private api:MaterialService,
  ) {
    this.mostrarNuevo = false;
    this.mostrarLista = true;   
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('_user'));
    this.getMateriales()
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



  getMateriales() {
    this.api.getMaterial()
    .subscribe(data => {
      this.material = data
    })
  }

}
