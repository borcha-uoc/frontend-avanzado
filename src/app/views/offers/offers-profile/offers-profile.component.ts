import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { OffersService } from 'src/app/shared/services/offers.service';
import { Offer } from 'src/app/shared/models/offer.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-offers-profile',
  templateUrl: './offers-profile.component.html'
})
export class OffersProfileComponent implements OnChanges {
  displayedColumns: string[] = ['job.name', 'company.name', 'category.name', 'date', 'province.name', 'municipe.name', 'actions' ];

  @Input() user: User;
  offers: Offer[] = [];
  constructor() {}
  ngOnChanges() {
    this.offers = this.user.offers;
  }
}
