import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-studies',
  templateUrl: './profile-studies.component.html',
  styleUrls: ['./profile-studies.component.scss']
})
export class ProfileStudiesComponent {

  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.currentUser;
  }

  remove(study) {
    if (!confirm(`¿Eliminar los estudios: ${study.title.name}?`)) {
      return;
    }

    this.user.studies = this.user.studies.filter(s => s.id != study.id);
    this.authenticationService.saveUser(this.user);
  }
}
