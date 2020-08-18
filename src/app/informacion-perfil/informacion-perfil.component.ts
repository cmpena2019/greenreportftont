import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-perfil',
  templateUrl: './informacion-perfil.component.html',
  styleUrls: ['./informacion-perfil.component.css']
})
export class InformacionPerfilComponent implements OnInit {


  public mostrarNuevo: boolean;
  public mostrarLista: boolean;
  user: any = undefined;
  constructor() {
    this.mostrarNuevo = false;
    this.mostrarLista = true;
  }

  ngOnInit() {
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
