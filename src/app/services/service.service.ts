import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  api : string ="http://localhost:3000/products"

  getProducts(): Observable<any>{
    return this.http.get<any>(this.api);
  }
}
