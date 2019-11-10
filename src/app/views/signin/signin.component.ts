import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IStore } from '@app/shared/state/store.interface';
import { AuthActions } from '@app/shared/state/auth/actions';
import { getErrorLogin } from '@app/shared/state/auth/selectors';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  errorLogin: Observable<boolean>;

  constructor(
    private store: Store<IStore>,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.errorLogin = store.select(getErrorLogin);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    this.store.dispatch(AuthActions.login(this.loginForm.value));
  }
}
