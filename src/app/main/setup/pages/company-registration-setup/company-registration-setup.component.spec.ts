import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyRegistrationSetupComponent } from './company-registration-setup.component';

describe('CompanyRegistrationSetupComponent', () => {
  let component: CompanyRegistrationSetupComponent;
  let fixture: ComponentFixture<CompanyRegistrationSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyRegistrationSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyRegistrationSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
