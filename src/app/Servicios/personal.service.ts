import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Personal} from '../models/Personal';
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
}
