import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ColDef } from 'ag-grid-community'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  columnDefs: ColDef[] = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Email', field: 'email' },
    { headerName: 'Designation', field: 'designation' },
    { headerName: 'CTC', field: 'ctc' }
  ];

  rowData: any;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.employeeService.getAllEmployees().subscribe(
      employees => {
        this.rowData = employees;
      },
      error => {
        console.error('Error fetching employees:', error);
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
