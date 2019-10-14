import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLanguagesEditComponent } from './profile-languages-edit.component';

describe('ProfileLanguagesEditComponent', () => {
  let component: ProfileLanguagesEditComponent;
  let fixture: ComponentFixture<ProfileLanguagesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileLanguagesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLanguagesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
