import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import { OffersService } from 'src/app/shared/services/offers.service'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  loading: boolean;
  offers: Offer[] = [];

  constructor(
    private offersService: OffersService)
  {
    this.loading = true;
    this.offersService.getOffers().then(offers => {
      this.offers = offers;
      this.loading = false;
    });
  }
}
