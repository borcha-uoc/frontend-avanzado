import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/models/offer.model';
import { OffersService } from 'src/app/shared/services/offers.service'

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent {
  offers: Offer[] = [];

  constructor(
    private offersService: OffersService)
  {
    // Cargar opciones de los desplegables
    this.offersService.getOffers().then(offers => this.offers = offers);
  }
}
