import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppSettings } from 'src/app/shared/app.settings';
import { Offer } from 'src/app/shared/models/offer.model';

@Injectable()
export class OffersService {
  base_url: string = "http://mybackend.com/api/";

  constructor(private http: HttpClient) {}

  getOffers() {
    return this.http.get<Offer[]>(this.base_url + 'offers').toPromise();
  }

}

