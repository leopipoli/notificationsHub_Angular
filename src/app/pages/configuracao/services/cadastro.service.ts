import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  controller!: string;

  constructor(private http: HttpClient) { 
    this.controller = "Configuracao"
  }

  Post(data: any): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/${this.controller}/Post`, data);
  }
}
