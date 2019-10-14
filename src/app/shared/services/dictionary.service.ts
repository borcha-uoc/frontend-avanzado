import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettings } from 'src/app/shared/app.settings';
import { DocumentType, Province, Municipe } from 'src/app/shared/models/user.model';


@Injectable()
export class DictionaryService {
  base_url: string = "http://mybackend.com/api/";

  constructor(private http: HttpClient) {}

  getDocumentTypes() {
    return this.http.get<DocumentType[]>(this.base_url + 'documentTypes').toPromise();
  }
  getProvinces() {
    return this.http.get<Province[]>(this.base_url + 'provinces').toPromise();;
  }
  getMunicipes() {
    return this.http.get<Municipe[]>(this.base_url + 'municipes').toPromise();;
  }
}
