import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfilePersonalDataComponent } from './profile-personal-data/profile-personal-data.component';
import { ProfileStudiesComponent } from './profile-studies/profile-studies.component';
import { ProfileLanguagesComponent } from './profile-languages/profile-languages.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'personal-data',
    component: ProfilePersonalDataComponent
  },
  {
    path: 'studies',
    component: ProfileStudiesComponent
  },
  {
    path: 'languages',
    component: ProfileLanguagesComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
