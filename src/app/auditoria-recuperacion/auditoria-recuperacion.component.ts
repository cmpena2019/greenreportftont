import { Component, OnInit } from '@angular/core';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-auditoria-recuperacion',
  templateUrl: './auditoria-recuperacion.component.html',
  styleUrls: ['./auditoria-recuperacion.component.css']
})
export class AuditoriaRecuperacionComponent implements OnInit {


  user: any = undefined;

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('_user'));
  }

}
