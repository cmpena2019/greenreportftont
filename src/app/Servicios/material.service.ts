import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Material} from '../models/Material';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
const {server} = environment;
@Injectable({
  providedIn: 'root'
})
export class MaterialService {
api = `${server}/materiales`;
constructor(private http: HttpClient) { }
getMaterial(): Observable<Material>{
  return this.http.get<any>(`${this.api}`);
}



}

