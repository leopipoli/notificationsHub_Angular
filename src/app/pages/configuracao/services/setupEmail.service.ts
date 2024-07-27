import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SetupEmailModel } from '../models/setupeEmail.model';

@Injectable({
  providedIn: 'root'
})
export class SetupEmailService {
  controller!: string;

  constructor(private http: HttpClient) { 
    this.controller = "SetupEmail"
  }
  
  GetById(id: number): Observable<any> {
    return this.http.get<SetupEmailModel>(`${environment.apiUrl}/${this.controller}/GetById/${id}`);
  }

  Post(data: any): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/${this.controller}/Post`, data);
  }
}
