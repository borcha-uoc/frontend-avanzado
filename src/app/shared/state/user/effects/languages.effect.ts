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
      // Aquí se debería llamar al método que permita eliminar el idioma indicado
      // tap(({id}) => this.profileService.updateProfile(this.user)),
      mergeMap(({id}) => of(LanguagesActions.deleteLanguageSuccess({id})))
    )
  );
}