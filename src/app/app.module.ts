import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import {MatCheckboxModule} from '@angular/material/checkbox';


import { EmployeeListComponent } from './employee-list/employee-list.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { EmailLogComponent } from './email-log/email-log.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { AgGridModule } from 'ag-grid-angular';
import { SendEmailToVendorsComponent } from './send-email-to-vendors/send-email-to-vendors.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    VendorListComponent,
    CreateEmployeeComponent,
    CreateVendorComponent,
    EmailLogComponent,
    HomeComponent,
    LoginUserComponent,
    LoginAdminComponent,
    AdminHomepageComponent,
    SendEmailToVendorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    AgGridModule,
    AgGridAngular,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
