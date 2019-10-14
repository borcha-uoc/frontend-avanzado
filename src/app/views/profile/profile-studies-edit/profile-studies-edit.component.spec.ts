import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileStudiesEditComponent } from './profile-studies-edit.component';

describe('ProfileStudiesEditComponent', () => {
  let component: ProfileStudiesEditComponent;
  let fixture: ComponentFixture<ProfileStudiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileStudiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileStudiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
