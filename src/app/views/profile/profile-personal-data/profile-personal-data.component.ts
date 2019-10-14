import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'

@Component({
  selector: 'app-profile-personal-data',
  templateUrl: './profile-personal-data.component.html',
  styleUrls: ['./profile-personal-data.component.scss']
})
export class ProfilePersonalDataComponent {
  user: User;
  personalDataForm: FormGroup;

  documentTypes = [];
  provinces = [];
  municipes = [];
  

  constructor(
    private formBuilder: FormBuilder,
    private dictionaryService: DictionaryService,
    private authenticationService: AuthenticationService) {

    this.user = authenticationService.currentUser;

    // Establecer las posibles opciones de los desplegables con el valor actual
    this.documentTypes = [this.user.documentType];
    this.provinces = [this.user.address.province];
    this.municipes = [this.user.address.municipe];


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

    // Cargar de forma asíncrona el total de las opciones de los desplegables
    // y mantener el valor actual tras rellenar todas las opciones disponbiles
    this.dictionaryService.getDocumentTypes().then(documentTypes => {
      this.documentTypes = documentTypes;
      this.personalDataForm.controls.documentType.patchValue(this.user.documentType);
    });

    this.dictionaryService.getProvinces().then(provinces => {
      this.provinces = provinces;
      let address = <FormGroup>this.personalDataForm.controls.address;
      address.controls.province.patchValue(this.user.address.province);
    });

    this.dictionaryService.getMunicipes().then(municipes => {
      this.municipes = municipes;
      let address = <FormGroup>this.personalDataForm.controls.address;
      address.controls.municipe.patchValue(this.user.address.municipe);
    });
  }

  save() {
    console.log(this.personalDataForm.value)
  }

  compareByUid(c1: any, c2:any): boolean {
    return c1 && c2 ? c1.uid === c2.uid : c1 === c2; 
  }
  }

}
