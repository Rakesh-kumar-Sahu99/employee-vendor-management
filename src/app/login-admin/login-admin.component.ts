import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  adminLoginForm: FormGroup;

  constructor(private fb: FormBuilder, private adminService: AdminService,private router: Router) {
    this.adminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.adminLoginForm.valid) {
      const { email, password } = this.adminLoginForm.value;
      this.adminService.login(email, password).subscribe(
        (response: any) => {
          alert(response);
          this.router.navigate(['/admin-homepage']);
        },
        error => {
          alert(error.error);
        }
      );
    }
  }
}
