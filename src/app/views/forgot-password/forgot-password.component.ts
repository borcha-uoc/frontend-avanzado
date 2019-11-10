import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { IStore } from '@app/shared/state/store.interface';
import { AuthActions } from '@app/shared/state/auth/actions';
import { getRecovered } from '@app/shared/state/auth/selectors';

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

  recovered: Observable<boolean>;

  constructor(
    private store: Store<IStore>,
    private builder: FormBuilder,
    private router: Router,
  ) {
    this.recovered = store.select(getRecovered);
  }

  recoverPassword() {
    this.store.dispatch(AuthActions.recoverPassword(this.forgotPasswordForm.value));
  }
}
