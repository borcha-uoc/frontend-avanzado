import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'

@Component({
  selector: 'app-profile-personal-data',
  templateUrl: './profile-personal-data.component.html',
  styleUrls: ['./profile-personal-data.component.scss']
})
export class ProfilePersonalDataComponent {
  user: User;
  personalDataForm: FormGroup;

  

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService) {

    this.user = authenticationService.currentUser;

    this.personalDataForm = this.formBuilder.group({
      name: [this.user.name],
      surname: [this.user.surname],
      birthdate: [this.user.birthdate],
      phone: [this.user.phone],
      phone2: [this.user.phone2],
      documentType: [this.user.documentType],
      documentNumber: [this.user.documentNumber],
      address: this.formBuilder.group({
        street: [this.user.address.street],
        province: [this.user.address.province],
        municipe: [this.user.address.municipe],
      }),
      license: [this.user.license],
      aboutMe: [this.user.aboutMe],
      otherCompetences: [this.user.otherCompetences]
    });

  save() {
    console.log(this.personalDataForm.value)
  }
  }

}
