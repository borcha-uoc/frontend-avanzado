import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettings } from 'src/app/shared/app.settings';
import { Institution, Category, Grade, TitleStudy, LevelStudy } from 'src/app/shared/models/study.model';


@Injectable()
export class StudiesService {
  base_url: string = "http://mybackend.com/api/";

  constructor(private http: HttpClient) {}

  getInstitutions() {
    return this.http.get<Institution[]>(this.base_url + 'institutions').toPromise();
  }
  getCategories() {
    return this.http.get<Category[]>(this.base_url + 'categories').toPromise();
  }
  getGrades() {
    return this.http.get<Grade[]>(this.base_url + 'grades').toPromise();
  }
  getTitleStudies() {
    return this.http.get<TitleStudy[]>(this.base_url + 'titleStudies').toPromise();
  }
  getLevelStudies() {
    return [
      { id: 1, name: 'Ciclo Formativo' },
      { id: 2, name: 'Título universitario' },
      { id: 3, name: 'Otros' }
    ];
  }
}
