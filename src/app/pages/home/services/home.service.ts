import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ConfiguracaoModel } from '../../configuracao/models/configuracao.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  controller!: string;

  constructor(private http: HttpClient) { 
    this.controller = "Configuracao"
  }

  GetAll(){
    return this.http.get<Array<ConfiguracaoModel>>(`${environment.apiUrl}/${this.controller}/GetAll`)
  }
}
