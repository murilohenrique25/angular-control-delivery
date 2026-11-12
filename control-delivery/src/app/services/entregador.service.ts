import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entregador } from '../interfaces/entregador';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntregadorService {
  private apiUrl = 'https://tomcat.vps6912.panel.icontainer.net:8443/control-api/api/v1/entregador';
  constructor(private http: HttpClient) { }

  carregarEntregadores(): Observable<Entregador[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.get<Entregador[]>(this.apiUrl, { headers });
  }


  salvarEntregador(objUserForm: any): Observable<Entregador> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Entregador>(
      this.apiUrl, objUserForm, { headers }
    );
  }

  atualizarEntregador(id: Number, objUpdateEntregador: any) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.apiUrl}/${id}`, objUpdateEntregador, { headers });
  }
}
