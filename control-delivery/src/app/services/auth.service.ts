import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://tomcat.vps6912.panel.icontainer.net:8443/control-api/api/v1/auth';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // Cria o body da requisição
    const body = { username, password };
    // Define os headers, caso a API exija (exemplo: Content-Type: application/json)
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Faz a requisição POST com username e password no body
    return this.http.post<any>(`${this.apiUrl}`, body, { headers }).pipe(
      tap(response => {
        // Armazena o token, nome e id no sessionStorage
        localStorage.setItem('token', response.token);
        localStorage.setItem('nome', response.nome);
        localStorage.setItem('idUser', response.idUser);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('nome');
    localStorage.removeItem('idUser');
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserName(): string | null {
    return localStorage.getItem('nome');
  }

  getUserId(): string | null {
    return localStorage.getItem('idUser');
  }
}
