import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettings } from 'src/app/shared/app.settings';
import { Language, LanguageLevel, LanguageName } from 'src/app/shared/models/language.model';


@Injectable()
export class LanguagesService {
  base_url: string = "http://mybackend.com/api/";

  constructor(private http: HttpClient) {}

  getLanguageLevels() {
    return this.http.get<LanguageLevel[]>(this.base_url + 'languageLevels').toPromise();
  }

  getLanguageNames() {
    return this.http.get<LanguageName[]>(this.base_url + 'languageNames').toPromise();
  }

  newLanguageName(languageName) {
    return this.http.put<LanguageName>(this.base_url + 'languageNames', languageName).toPromise();
  }
}

