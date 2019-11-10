import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/shared/services/signin.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

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
    ) { }

  recoverPassword() {
    alert('solicitar recuperar contraseña');
  }

}
