import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ConfiguracaoModel } from '../models/configuracao.model';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  controller!: string;

  constructor(private http: HttpClient) { 
    this.controller = "Configuracao"
  }
  
  GetById(id: number): Observable<any> {
    return this.http.get<ConfiguracaoModel>(`${environment.apiUrl}/${this.controller}/GetById/${id}`);
  }

  Post(data: any): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/${this.controller}/Post`, data);
  }
}
