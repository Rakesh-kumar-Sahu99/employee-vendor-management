import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private router: Router) {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      ctc: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.value;
      this.employeeService.createEmployee(formData).subscribe(
        response => {
          alert(response);
          this.employeeForm.reset();
        },
        error => {
          console.error('Error creating employee:', error);
        }
      );
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/admin-homepage');
  }
}
