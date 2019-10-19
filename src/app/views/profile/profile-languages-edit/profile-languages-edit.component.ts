import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Language, LanguageLevel, LanguageName } from 'src/app/shared/models/language.model';
import { LanguagesService } from 'src/app/shared/services/languages.service'

@Component({
  selector: 'app-profile-languages-edit',
  templateUrl: './profile-languages-edit.component.html',
  styleUrls: ['./profile-languages-edit.component.scss']
})
export class ProfileLanguagesEditComponent {

  languageNames;
  languageLevels;

  editing: boolean;
  languagesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private languagesService: LanguagesService)
  {
    // Cargar opciones de los desplegables
    this.languagesService.getLanguageNames().then(languageNames => this.languageNames = languageNames);
    this.languagesService.getLanguageLevels().then(languageLevels => this.languageLevels = languageLevels);

    let language = new Language();
    this.languagesForm = this.createFormGroup(language);
  }

  createFormGroup(language) {
    return this.formBuilder.group({
      name: [language.name],
      other: [null, Validators.required],
      level: [language.level],
      date: [language.date],
    });
  }

  }

  save() {
    console.log(this.languagesForm.value);
  }

  compareById(c1: any, c2:any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2; 
  }
}
