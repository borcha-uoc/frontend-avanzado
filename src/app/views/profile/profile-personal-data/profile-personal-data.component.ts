import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { DictionaryService } from 'src/app/shared/services/dictionary.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { validate } from 'src/app/shared/validators/validateSpanishId.js'

@Component({
  selector: 'app-profile-personal-data',
  templateUrl: './profile-personal-data.component.html',
  styleUrls: ['./profile-personal-data.component.scss']
})
export class ProfilePersonalDataComponent {
  user: User;
  personalDataForm: FormGroup;
  saving = false;

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
      name: [this.user.name, validName],
      surname: [this.user.surname, validName],
      birthdate: [this.user.birthdate, validDate],
      phone: [this.user.phone, validPhoneNumber],
      phone2: [this.user.phone2, validPhoneNumber],
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
    },
    { validators: validateDocumentNumber });

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
    this.saving = true;
    this.authenticationService.saveUser(this.personalDataForm.value)
    .then(() => {
      this.saving = false;
      alert('Datos guardados correctamente');
    });
  }

  error(field, errorType) {
    let control = field ? this.personalDataForm.get(field) : this.personalDataForm;
    return (control.dirty || control.touched) && control.invalid && control.errors[errorType];
  }

  compareByUid(c1: any, c2:any): boolean {
    return c1 && c2 ? c1.uid === c2.uid : c1 === c2; 
  }
}


// Validadores

let validName = Validators.compose([
  Validators.minLength(3),
  Validators.maxLength(55),
  Validators.pattern('^[A-Za-zñáéíóúÑÁÉÍÓÚ -]+$'),
  Validators.pattern('^[^ -].*'),
  Validators.pattern('.*[^ -]$'),
  Validators.required
]);


function validDate(c: FormControl) {
  const DDMMYYYY_REGEXP = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$|^$/;

  return DDMMYYYY_REGEXP.test(c.value) && validDate(c.value) ? null : {
    validDate: {
      valid: false
    }
  };

  function validDate(t: string) {
    const chunks = t.split('/');
    return !Date.parse(`chunks[2]-chunks[1]-chunks[0]`);
  }
}

let validPhoneNumber = Validators.pattern(/^\+?[0-9 ]+$|^$/);

function validateDocumentNumber(group: FormGroup) {
  const documentType = group.get('documentType');
  const documentNumber = group.get('documentNumber');  

  if (documentType.value && documentType.value.name == 'NIF/NIE' && documentNumber.value.length > 0 && !validate(documentNumber.value).valid) {
    return { nif : { valid: false }};
  }

  return null;
}
