import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Residence } from '../model/Residence';
@Injectable({
  providedIn: 'root',
})
export class ResidenceService {
  private api: string = 'http://localhost:3000/residences';
  constructor(private http: HttpClient) {}

  getAllResidences(): Observable<Residence[]> {
    return this.http.get<Residence[]>(this.api);
  }
}
