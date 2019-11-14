import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { catchError, mergeMap, exhaustMap, map, tap } from 'rxjs/operators';

import { SigninService } from '@app/shared/services/signin.service';
import { ProfileService } from '@app/shared/services/profile.service';
import { StudiesActions } from '../actions';
import { MockData } from '@app/shared/mock-data';
import { VocationalStudy, CollegeStudy } from '@app/shared/models/study.model';

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

  updateStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudiesActions.updateStudy),
      tap(({study}) => {
        const user = this.profileService.user;
        const studies = user.studies;
        const foundIndex = studies.findIndex(_study => _study.uid === study.uid);
        studies[foundIndex] = study;
        this.profileService.updateProfile(user);
      }),
      mergeMap(() => of(StudiesActions.updateStudySuccess())),
      tap(() => this.router.navigate(['admin/profile'])),
    )
  );

  saveStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudiesActions.saveStudy),
      tap(({study}) => {
        const user = this.profileService.user;
        const _study = MockData.fakeIncreaseID<VocationalStudy | CollegeStudy>(
          user.studies,
          study
        );
        user.studies = [...user.studies, _study];
        this.profileService.updateProfile(user);
      }),
      mergeMap(() => of(StudiesActions.saveStudySuccess())),
      tap(() => this.router.navigate(['admin/profile'])),
    )
  );

}



