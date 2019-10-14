import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  running: boolean = false;

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ])

  forgotPasswordForm: FormGroup = this.builder.group({
    email: this.email,
  });

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  recoverPassword() {
    this.running = true;
    this.authenticationService.recoverPassword(this.email.value)
    .then(found => {
      this.running = false;
      if (found) {
        alert('¡Correo electrónico de recuperación enviado! Revise su bandeja de entrada.');
        this.router.navigate(['/']);
      } else {
        alert('No se ha encontrado ningún usuario registrado con este correo electrónico.');
      }
    })
  }

}





