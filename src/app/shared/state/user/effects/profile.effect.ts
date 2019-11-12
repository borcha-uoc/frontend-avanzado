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
}