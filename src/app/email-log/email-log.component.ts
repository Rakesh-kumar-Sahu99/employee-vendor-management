import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ColDef } from 'ag-grid-community'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-log',
  templateUrl: './email-log.component.html',
  styleUrls: ['./email-log.component.css']
})
export class EmailLogComponent implements OnInit {
  columnDefs: ColDef[] = [
    { headerName: 'ID', field: 'id' },
    { headerName: 'To Email', field: 'toEmail' },
    { headerName: 'Subject', field: 'subject' },
    { headerName: 'Body', field: 'body' },
    { headerName: 'Sent Successfully', field: 'sentSuccessfully' }
  ];

  rowData: any;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.fetchEmailLogs();
  }

  fetchEmailLogs(): void {
    this.adminService.getEmailLogs().subscribe(
      emailLogs => {
        this.rowData = emailLogs;
      },
      error => {
        console.error('Error fetching email logs:', error);
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
