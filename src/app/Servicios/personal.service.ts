import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Login} from '../models/login';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const {server} = environment;
@Injectable({
  providedIn: 'root'
})
export class PersonalService {
api = `${server}/Personal`;
  constructor(private http: HttpClient) { }
login(login:Login): Observable<Login>{
return this.http.post<any>(`${this.api}`,login);
}
}
