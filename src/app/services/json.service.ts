import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto.model';

const baseUrl = 'http://localhost:3000/proyectos';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(private http: HttpClient) { }

  getAll(): Observable<Proyecto[]> {
    return this.http.get<Proyecto[]>(baseUrl);
  }

  get(id: any): Observable<Proyecto> {
    return this.http.get<Proyecto>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
