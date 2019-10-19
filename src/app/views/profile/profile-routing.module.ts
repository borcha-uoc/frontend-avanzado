import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfilePersonalDataComponent } from './profile-personal-data/profile-personal-data.component';
import { ProfileStudiesComponent } from './profile-studies/profile-studies.component';
import { ProfileStudiesEditComponent } from './profile-studies-edit/profile-studies-edit.component';
import { ProfileLanguagesComponent } from './profile-languages/profile-languages.component';
import { ProfileLanguagesEditComponent } from './profile-languages-edit/profile-languages-edit.component';

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
    path: 'studies/new',
    component: ProfileStudiesEditComponent
  },
  {
    path: 'studies/:id/edit',
    component: ProfileStudiesEditComponent
  },
  {
    path: 'languages',
    component: ProfileLanguagesComponent
  },
  {
    path: 'languages/new',
    component: ProfileLanguagesEditComponent
  },
  {
    path: 'languages/:id/edit',
    component: ProfileLanguagesEditComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
