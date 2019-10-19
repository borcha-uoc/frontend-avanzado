import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { Language, LanguageLevel, LanguageName } from 'src/app/shared/models/language.model';
import { LanguagesService } from 'src/app/shared/services/languages.service'
import { validDate } from 'src/app/shared/validators/validators'

@Component({
  selector: 'app-profile-languages-edit',
  templateUrl: './profile-languages-edit.component.html',
  styleUrls: ['./profile-languages-edit.component.scss']
})
export class ProfileLanguagesEditComponent {

  languageNames;
  languageLevels;
  otherOption = {id:-1, name: 'Otro'};

  editing: boolean;
  languagesForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private languagesService: LanguagesService)
  {
    // Cargar opciones de los desplegables
    this.languagesService.getLanguageNames().then(languageNames => {
      this.languageNames = languageNames;
      // Agregamos la opción otros
      this.languageNames.push(this.otherOption);
    });
    this.languagesService.getLanguageLevels().then(languageLevels => this.languageLevels = languageLevels);

    let language = new Language();
    this.editing = this.router.url.endsWith('edit');
    if (this.editing) {
      // buscar por id
      let id = parseInt(this.route.snapshot.params.id);
      language = authenticationService.currentUser.languages.find(l => l.id == id);
    } else {
      language = new Language();
    }

    this.languagesForm = this.createFormGroup(language);
    this.nameChanged();
  }

  createFormGroup(language) {
    return this.formBuilder.group({
      name: [language.name, Validators.required],
      other: [null, Validators.required],
      level: [language.level, Validators.required],
      date: [language.date,  [Validators.required, validDate]],
    });
  }

  get showOther() {
    return this.languagesForm.controls.name.value == this.otherOption;
  }

  nameChanged() {
    if (this.showOther) {
      this.languagesForm.controls.other.enable();
    } else {
      this.languagesForm.controls.other.disable();
    }
  }

  save() {
    let user = this.authenticationService.currentUser;
    let language = this.languagesForm.value;

    if (this.editing) {
      language.id = parseInt(this.route.snapshot.params.id);

      // Reemplazamos el elementos que estamos editando
      user.languages.forEach((element, index) => {
        if(element.id === language.id) {
          user.languages[index] = language;
        }
      });
    } else {
      // Generamos un id distinto cada vez que guardemos
      language.id = new Date().getTime();
      // Agregamo el elemento
      user.languages.push(language);
    }
    this.authenticationService.saveUser(user)
    .then(() => {
      this.saving = false;
      alert('Datos guardados correctamente');
      this.router.navigate(['/profile/languages']);
    });
  }

  error(field, errorType) {
    let control = field ? this.languagesForm.get(field) : this.languagesForm;
    return (control.dirty || control.touched) && control.invalid && control.errors[errorType];
  }

  compareById(c1: any, c2:any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2; 
  }
}
