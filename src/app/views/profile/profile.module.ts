import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfilePersonalDataComponent } from './profile-personal-data/profile-personal-data.component';
import { ProfileStudiesComponent } from './profile-studies/profile-studies.component';
import { ProfileLanguagesComponent } from './profile-languages/profile-languages.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePersonalDataComponent,
    ProfileStudiesComponent,
    ProfileLanguagesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
