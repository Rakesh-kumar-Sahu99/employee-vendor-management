import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor.service';
import { ColDef } from 'ag-grid-community'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'UPI ID', field: 'upiId' }
  ];

  rowData: any;

  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit(): void {
    this.fetchVendors();
  }

  fetchVendors(): void {
    this.vendorService.getAllVendors().subscribe(
      vendors => {
        this.rowData = vendors;
      },
      error => {
        console.error('Error fetching vendors:', error);
      }
    );
  }

  onGridReady(params: any) {
    params.api.sizeColumnsToFit();
  }

  goToAdminHomePage(): void {
    this.router.navigateByUrl('/admin-homepage');
  }
}
