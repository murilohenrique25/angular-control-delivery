import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matriz } from '../interfaces/matriz';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = 'https://tomcat.vps6912.panel.icontainer.net:8443/control-api/api/v1/empresa';

  constructor(private http: HttpClient) { }

  salvarMatriz(matriz: any): Observable<Matriz> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Matriz>(`${this.apiUrl}/matriz`, matriz, { headers });
  }

  buscarMatrizes(): Observable<Matriz[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Matriz[]>(`${this.apiUrl}/matriz`, { headers });
  }

  buscarMatriz(id: any): Observable<Matriz> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<Matriz>(`${this.apiUrl}/${id}`, { headers });
  }

}
