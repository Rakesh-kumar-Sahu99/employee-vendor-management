import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private apiUrl = 'http://localhost:8081/employee_vendor_management';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/login`, { email, password }, { responseType: 'text' });
  }

  getEmailLogs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/email-logs`);
  }
}
