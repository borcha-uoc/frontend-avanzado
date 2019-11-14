import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MockData } from 'src/app/shared/mock-data';
import {Language, LanguageLevel, LanguageName } from 'src/app/shared/models/language.model';
import { dateValidator } from 'src/app/shared/directives/date-validator.directive';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '@app/shared/state/store.interface';
import { LanguagesActions } from '@app/shared/state/user/actions';
import { getSelectedLanguage } from '@app/shared/state/user/selectors';


@Component({
  selector: 'app-profile-language',
  templateUrl: './profile-language.component.html',
  styleUrls: ['./profile-language.component.scss']
})
export class ProfileLanguageComponent implements OnInit {
  rForm: FormGroup;
  language: Language;
  languageLevels: LanguageLevel[];
  languageNames: LanguageName[];
  isNew: boolean = false;

  constructor(
    private store: Store<IStore>,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.store.select(getSelectedLanguage).subscribe(language => {
      if (!language) return;
      this.language = language;
      this.loadFormInstance();
    });
    this.route.params.subscribe(params => {
      this.isNew = !params.uid;
      if (this.isNew) {
        this.store.dispatch(LanguagesActions.newLanguage());
      } else {
        this.store.dispatch(LanguagesActions.editLanguage({uid:+params.uid}));
      }
    });
  }
  ngOnInit() {
    this.loadSelectProperties();
  }
  public loadSelectProperties(): void {
    this.languageLevels = MockData.LANGUAGES_LEVEL;
    this.languageNames = MockData.LANGUAGES_NAME;
  }

  public loadFormInstance(): void {
    this.rForm = new FormGroup({
      level: new FormControl(this.language.level, [Validators.required]),
      name: new FormControl(this.language.name, [Validators.required]),
      date: new FormControl(this.language.date, [
        Validators.required,
        dateValidator()
      ])
    });
  }
  public submit() {
    this.saveOrUpdate({ ...this.language, ...this.rForm.value });
  }

  compareLevel(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  compareName(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }
  private update(language: Language) {
    this.store.dispatch(LanguagesActions.updateLanguage({language}));
  }
  private save(language: Language) {
    this.store.dispatch(LanguagesActions.saveLanguage({language}));
  }
  saveOrUpdate(language: Language) {
    this.isNew ? this.save(language) : this.update(language);
  }
}
