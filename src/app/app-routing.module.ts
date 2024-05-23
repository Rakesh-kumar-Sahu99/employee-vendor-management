import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { CreateVendorComponent } from './create-vendor/create-vendor.component';
import { EmailLogComponent } from './email-log/email-log.component';
import { HomeComponent } from './home/home.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { SendEmailToVendorsComponent } from './send-email-to-vendors/send-email-to-vendors.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login-user', component: LoginUserComponent },
  { path: 'login-admin', component: LoginAdminComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'vendors', component: VendorListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'create-vendor', component: CreateVendorComponent },
  { path: 'email-log', component: EmailLogComponent },
  { path: 'admin-homepage', component: AdminHomepageComponent },
  { path: 'sendMail', component: SendEmailToVendorsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
