import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.css']
})
export class CreateVendorComponent implements OnInit {
  vendorForm: FormGroup;

  constructor(private fb: FormBuilder, private vendorService: VendorService, private router: Router) {
    this.vendorForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      upiId: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.vendorForm.valid) {
      const formData = this.vendorForm.value;
      this.vendorService.createVendor(formData).subscribe(
        response => {
          alert(response);
          // Reset the form after successful submission
          this.vendorForm.reset();
        },
        error => {
          console.error('Error creating vendor:', error);
        }
      );
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/admin-homepage');
  }
}
