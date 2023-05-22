import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  buyerBank: string;
  sellerBank: string;
  applicant: string;
  beneficiary: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(`${environment.baseUrl}`);
  }

  public getMessageById(id: number): Observable<Message> {
    return this.http.get<Message>(`${environment.baseUrl}/${id}`);
  }
}
