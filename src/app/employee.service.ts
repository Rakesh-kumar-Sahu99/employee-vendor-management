// employee.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8081/employee_vendor_management';

  constructor(private http: HttpClient) { }

  createEmployee(employeeData: any): Observable<string> {
    return this.http.post(`${this.apiUrl}/admin/createEmployees`, employeeData, { responseType: 'text' });
  }

  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/admin/getEmployees`);
  }
}
