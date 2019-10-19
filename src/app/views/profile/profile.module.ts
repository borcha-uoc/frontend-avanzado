import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfilePersonalDataComponent } from './profile-personal-data/profile-personal-data.component';
import { ProfileStudiesComponent } from './profile-studies/profile-studies.component';
import { ProfileLanguagesComponent } from './profile-languages/profile-languages.component';
import { ProfileStudiesEditComponent } from './profile-studies-edit/profile-studies-edit.component';
import { ProfileLanguagesEditComponent } from './profile-languages-edit/profile-languages-edit.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePersonalDataComponent,
    ProfileStudiesComponent,
    ProfileLanguagesComponent,
    ProfileStudiesEditComponent,
    ProfileLanguagesEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
