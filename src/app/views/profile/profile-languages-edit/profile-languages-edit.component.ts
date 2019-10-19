import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Language, LanguageLevel, LanguageName } from 'src/app/shared/models/language.model';

@Component({
  selector: 'app-profile-languages-edit',
  templateUrl: './profile-languages-edit.component.html',
  styleUrls: ['./profile-languages-edit.component.scss']
})
export class ProfileLanguagesEditComponent {


  editing: boolean;
  languagesForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder)
  {
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
}
