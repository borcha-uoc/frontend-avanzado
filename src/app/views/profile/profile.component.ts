import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.currentUser;
  }

}
