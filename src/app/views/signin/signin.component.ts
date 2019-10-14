import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])
  password = new FormControl('', [
    Validators.required
  ])

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  constructor(
    private builder: FormBuilder,
    private authenticationService: AuthenticationService) { }

  login() {
    this.authenticationService.login(this.loginForm.value)
    .then(user => {
      if (!user) {
        alert('Usuario o contraseña inválida');
      } else {
        // navegar dashboard
      }
    })
  }

}
