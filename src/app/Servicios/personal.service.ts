import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Personal} from '../models/Personal';
import {Usuario} from '../models/Usuario';
import {Contraseña} from '../models/Contrasenas';
import {rol} from '../models/rol';
import {permisos} from '../models/permisos';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const {server} = environment;
@Injectable({
  providedIn: 'root'
})
export class PersonalService {
api = `${server}/Personal`;
  constructor(private http: HttpClient) { }
  Personal(Personal:Personal): Observable<Personal>{
    return this.http.post<any>(`${this.api}`, Personal);
  }

  getPersonal(): Observable<Personal>{
    return this.http.get<any>(`${this.api}`);
  }
  api1 = `${server}/Usuario`;
  Usuario(Usuario:Usuario): Observable<Usuario>{
    return this.http.post<any>(`${this.api1}`, Usuario);
  }

  api2 = `${server}/Contrasenas`;
  contraseña(Contraseña:Contraseña): Observable<Contraseña>{
    return this.http.post<any>(`${this.api2}`, Contraseña);
  }
  api3 = `${server}/rol`;
  rol(rol:rol): Observable<rol>{
    return this.http.post<any>(`${this.api3}`, rol);
  }

  api4 = `${server}/permisos`;
  permisos(permisos:permisos): Observable<permisos>{
    return this.http.post<any>(`${this.api4}`, permisos);
  }

}
