import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RelatorioService {
  private apiUrl = 'https://tomcat.vps6912.panel.icontainer.net:8443/control-api/api/v1/relatorio'; // Substitua pelo URL do seu backend

  constructor(private http: HttpClient) { }

  generatePdf(
    dataInicio: string,
    dataFim: string,
    modelo: string,
    statusEntrega?: string[],
    idsEntregador?: number[]
  ): Observable<Blob> {
    // Configurar parâmetros da requisição
    let params = new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim);

    if (statusEntrega && statusEntrega.length > 0) {
      params = params.set('statusEntrega', statusEntrega.join(','));
    }

    if (idsEntregador && idsEntregador.length > 0) {
      params = params.set('idsEntregador', idsEntregador.join(','));
    }

    return this.http.get(`${this.apiUrl}/${modelo}/${dataInicio}/${dataFim}`, {
      params,
      responseType: 'blob', // Especifica que o retorno será um Blob (PDF)
    });
  }

  generatePdfServices(
    dataInicio: string,
    dataFim: string,
    statusEntrega?: string[],
    idsEntregador?: number[]
  ): Observable<Blob> {
    // Configurar parâmetros da requisição
    let params = new HttpParams()
      .set('dataInicio', dataInicio)
      .set('dataFim', dataFim);

    if (statusEntrega && statusEntrega.length > 0) {
      params = params.set('statusEntrega', statusEntrega.join(','));
    }

    if (idsEntregador && idsEntregador.length > 0) {
      params = params.set('idsEntregador', idsEntregador.join(','));
    }

    return this.http.get(`${this.apiUrl}/avulsas/${dataInicio}/${dataFim}`, {
      params,
      responseType: 'blob', // Especifica que o retorno será um Blob (PDF)
    });
  }


}
