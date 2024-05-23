import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  private apiUrl = 'http://localhost:8081/employee_vendor_management'; // Adjust the URL according to your backend API endpoint

  constructor(private http: HttpClient) { }

  createVendor(vendorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/createVendors`, vendorData,{ responseType: 'text' });
  }

  getAllVendors(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/admin/getVendors`);
  }

  sendEmailsToVendors(vendorNames: string[]): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/admin/sendEmailsToVendors`, vendorNames, { responseType: 'text' as 'json' });
  }
}
