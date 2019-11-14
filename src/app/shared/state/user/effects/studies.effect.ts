import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, mergeMap, exhaustMap, map, tap } from 'rxjs/operators';

import { SigninService } from '@app/shared/services/signin.service';
import { ProfileService } from '@app/shared/services/profile.service';
import { StudiesActions } from '../actions';

import { Router } from '@angular/router';


@Injectable()
export class StudiesEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService,
    private router: Router,
  ) {}

  deleteStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudiesActions.deleteStudy),
      // Aquí se debería llamar al método que permita eliminar el studio indicado
      // tap(({id}) => this.profileService.updateProfile(this.user)),
      mergeMap(({id}) => of(StudiesActions.deleteStudySuccess({id})))
    )
  );

  editStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudiesActions.editStudy),
      mergeMap(({uid}) =>
        of(StudiesActions.editStudyLoaded({study:this.profileService.user.studies.find(study => study.uid === uid)})))
    )
  );
}
