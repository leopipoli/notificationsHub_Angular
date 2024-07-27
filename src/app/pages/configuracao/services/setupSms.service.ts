import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SetupSmsModel } from '../models/setupSms.model';

@Injectable({
  providedIn: 'root'
})
export class SetupSmsService {
  controller!: string;

  constructor(private http: HttpClient) { 
    this.controller = "SetupSms"
  }
  
  GetById(id: number): Observable<any> {
    return this.http.get<SetupSmsModel>(`${environment.apiUrl}/${this.controller}/GetById/${id}`);
  }

  Post(data: SetupSmsModel): Observable<number> {
    return this.http.post<number>(`${environment.apiUrl}/${this.controller}/Post`, data);
  }
}
