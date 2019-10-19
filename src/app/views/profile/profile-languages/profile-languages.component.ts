import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-profile-languages',
  templateUrl: './profile-languages.component.html',
  styleUrls: ['./profile-languages.component.scss']
})
export class ProfileLanguagesComponent {

  user: User;

  constructor(private authenticationService: AuthenticationService) {
    this.user = this.authenticationService.currentUser;
  }

  remove(language) {
    if (!confirm(`¿Eliminar el idioma: ${language.name.name}?`)) {
      return;
    }
    
    this.user.languages = this.user.languages.filter(s => s.id != language.id);
    this.authenticationService.saveUser(this.user);
  }
}
