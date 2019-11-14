import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, mergeMap, exhaustMap, map, tap } from 'rxjs/operators';

import { ProfileService } from '@app/shared/services/profile.service';
import { LanguagesActions } from '../actions';

import { Router } from '@angular/router';


@Injectable()
export class LanguagesEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private router: Router,
  ) {}

  deleteLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LanguagesActions.deleteLanguage),
      tap(({id}) => {
        const user = this.profileService.user;
        const languages = user.languages;
        const index = languages.findIndex(language => language.uid === id);
        languages.splice(index, 1);
        this.profileService.updateProfile(user);
      }),
      mergeMap(({id}) => of(LanguagesActions.deleteLanguageSuccess({id})))
    )
  );
}