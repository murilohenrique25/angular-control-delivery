import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EntregaResponse } from '../interfaces/entrega-response';

@Injectable({
  providedIn: 'root'
})
export class MapaEntregaService {

  private apiUrl = 'https://tomcat.vps6912.panel.icontainer.net:8443/control-api/api/v1/entrega/mapa-intervalo';
  constructor(private http: HttpClient) { }

    listarEntregasIntervalo(dataInicial?: any, dataFinal?: any): Observable<EntregaResponse> {

       let params = new HttpParams()
              .set('dataInicio', dataInicial)
              .set('dataTermino', dataFinal);

        return this.http.get<EntregaResponse>(this.apiUrl, { params, });
    }

}
