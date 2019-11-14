import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, mergeMap, exhaustMap, map, tap } from 'rxjs/operators';

import { ProfileService } from '@app/shared/services/profile.service';
import { LanguagesActions } from '../actions';
import { MockData } from '@app/shared/mock-data';
import { Language } from '@app/shared/models/language.model';
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

  editLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LanguagesActions.editLanguage),
      mergeMap(({uid}) =>
        of(LanguagesActions.editLanguageLoaded({language:this.profileService.user.languages.find(language => language.uid === uid)})))
    )
  );

  updateLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LanguagesActions.updateLanguage),
      tap(({language}) => {
        const user = this.profileService.user;
        const languages = user.languages;
        const foundIndex = languages.findIndex(
          _language => _language.uid === language.uid
        );
        languages[foundIndex] = language;
        this.profileService.updateProfile(user);
      }),
      mergeMap(() => of(LanguagesActions.updateLanguageSuccess())),
      tap(() => this.router.navigate(['admin/profile'])),
    )
  );

  saveLanguage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LanguagesActions.saveLanguage),
      tap(({language}) => {
        const user = this.profileService.user;
        const _language = MockData.fakeIncreaseID<Language>(
          user.languages,
          language
        );
        user.languages = [...user.languages, _language];
        this.profileService.updateProfile(user);
      }),
      mergeMap(() => of(LanguagesActions.saveLanguageSuccess())),
      tap(() => this.router.navigate(['admin/profile'])),
    )
  );


}