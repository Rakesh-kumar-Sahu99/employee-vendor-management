import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { VendorService } from '../vendor.service';
import { Router } from '@angular/router';
import { MatCheckboxChange } from '@angular/material/checkbox'; // Import MatCheckboxChange

@Component({
  selector: 'app-send-email-to-vendors',
  templateUrl: './send-email-to-vendors.component.html',
  styleUrls: ['./send-email-to-vendors.component.css']
})
export class SendEmailToVendorsComponent implements OnInit {
  emailForm: FormGroup;
  vendors: any[] = [];

  constructor(private fb: FormBuilder, private vendorService: VendorService, private router: Router) {
    this.emailForm = this.fb.group({
      vendorNames: this.fb.array([], Validators.required)
    });
  }

  ngOnInit(): void {
    this.fetchVendors();
  }

  fetchVendors(): void {
    this.vendorService.getAllVendors().subscribe(
      (vendors) => {
        this.vendors = vendors;
        this.addCheckboxes();
      },
      (error) => {
        console.error('Error fetching vendors:', error);
      }
    );
  }

  addCheckboxes(): void {
    const vendorNames = this.emailForm.get('vendorNames') as FormArray;
    this.vendors.forEach(() => vendorNames.push(this.fb.control(false)));
  }

  get vendorNames(): FormArray {
    return this.emailForm.get('vendorNames') as FormArray;
  }

  onCheckboxChange(index: number, event: MatCheckboxChange): void {
    const vendorNames = this.vendorNames;
    vendorNames.at(index).setValue(event.checked ? this.vendors[index].name : false);
  }

  onSubmit(): void {
    const selectedVendorNames = this.vendorNames.controls
      .filter(control => control.value)
      .map(control => control.value);

    if (selectedVendorNames.length > 0) {
      this.vendorService.sendEmailsToVendors(selectedVendorNames).subscribe(
        response => {
          alert(response);
          this.emailForm.reset();
          this.vendorNames.clear();
          this.addCheckboxes();
        },
        error => {
          console.error('Error sending emails:', error);
        }
      );
    } else {
      alert('Please select at least one vendor.');
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/admin-homepage');
  }

  viewEmailLog(): void {
    this.router.navigateByUrl('/email-log');
  }
}
