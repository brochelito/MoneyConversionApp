import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7289/api/money'; 

  constructor(private http: HttpClient) { }

  getResult(amount: number): Observable<string> {
    const apiUrlWithAmount = `${this.apiUrl}/${amount}`;
    return this.http.get<string>(apiUrlWithAmount);
  }
}
