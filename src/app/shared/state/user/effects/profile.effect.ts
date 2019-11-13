import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, mergeMap, exhaustMap, map, tap } from 'rxjs/operators';

import { SigninService } from '@app/shared/services/signin.service';
import { ProfileService } from '@app/shared/services/profile.service';
import { ProfileActions } from '../actions';

import { Router } from '@angular/router';


@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private router: Router,
  ) {}

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.loadUser),
      mergeMap(() => of(ProfileActions.loadUserSuccess({user:this.profileService.user})))
    )
  );

  saveUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProfileActions.saveUser),
      tap(({user}) => {
        this.profileService.user = user;
        this.profileService.updateProfile(user);
      }),
      mergeMap(({user}) => of(ProfileActions.saveUserSuccess({user:this.profileService.user}))),
      tap(() => this.router.navigate(['admin/profile'])),
    )
  );
}