import { Component, OnInit } from '@angular/core';
import {StorageService} from '../Servicios/storage.service'

@Component({
  selector: 'app-proceso-recuperacion',
  templateUrl: './proceso-recuperacion.component.html',
  styleUrls: ['./proceso-recuperacion.component.css']
})
export class ProcesoRecuperacionComponent implements OnInit {
  user: any = undefined;

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('_user'));
  }

}
