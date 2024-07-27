import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SetupWebModel } from '../models/setupWeb.model';

@Injectable({
  providedIn: 'root'
})
export class SetupWebService {
  controller!: string;

  constructor(private http: HttpClient) { 
    this.controller = "SetupWeb"
  }
  
  GetById(id: number): Observable<any> {
    return this.http.get<SetupWebModel>(`${environment.apiUrl}/${this.controller}/GetById/${id}`);
  }

  Post(data: any): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/${this.controller}/Post`, data);
  }
}
