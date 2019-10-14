import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  running: boolean = false;

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
    private router: Router,
    private authenticationService: AuthenticationService) { }

  login() {
    this.running = true;
    this.authenticationService.login(this.loginForm.value)
    .then(user => {
      this.running = false;
      if (!user) {
        alert('Usuario o contraseña inválida');
      } else {
        // navegar dashboard
      }
    })
  }

}
