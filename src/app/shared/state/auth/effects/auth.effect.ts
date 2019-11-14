import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, mergeMap, exhaustMap, map, tap } from 'rxjs/operators';

import { SigninService } from '@app/shared/services/signin.service';
import { ProfileService } from '@app/shared/services/profile.service';
import { AuthActions } from '../actions';

import { Router } from '@angular/router';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private signinService: SigninService,
    private profileService: ProfileService,
    private router: Router,
  ) {}


  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({email, password}) => 
        from(this.signinService.login({email, password})).pipe(
          map(user => {
            if (!user) {
              return AuthActions.loginFailure();
            } else {
              return AuthActions.loginSuccess({user});
            }
          }),
          catchError(() => of(AuthActions.loginFailure()))
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({user}) => this.profileService.user = user),
        tap(() => this.router.navigate(['admin/dashboard']))
      ),
    { dispatch: false }
  );

  recoverPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.recoverPassword),
      mergeMap(({email}) => 
        from(this.signinService.recoverPassword(email)).pipe(
          map(found => {
            if (found) {
              return AuthActions.recoverPasswordSuccess();
            } else {
              return AuthActions.recoverPasswordFailure();
            }
          }),
          catchError(() => of(AuthActions.recoverPasswordFailure()))
        )
      )
    )
  );
}