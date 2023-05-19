import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get<Message[]>('http://localhost:3000/messages');
  }

  public getMessageById(id: number): Observable<Message> {
    return this.http.get<Message>(`http://localhost:3000/messages/${id}`);
  }
}
