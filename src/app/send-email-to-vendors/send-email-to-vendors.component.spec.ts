import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmailToVendorsComponent } from './send-email-to-vendors.component';

describe('SendEmailToVendorsComponent', () => {
  let component: SendEmailToVendorsComponent;
  let fixture: ComponentFixture<SendEmailToVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SendEmailToVendorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SendEmailToVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
