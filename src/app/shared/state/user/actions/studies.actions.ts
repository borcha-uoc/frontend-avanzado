import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';
import { Study, VocationalStudy, CollegeStudy } from '@app/shared/models/study.model';

export const deleteStudy = createAction(
  '[Studies] Delete',
  props<{id: number}>()
);

export const deleteStudySuccess = createAction(
  '[Studies] Delete Success',
  props<{id: number}>()
);

export const newStudy = createAction(
  '[Studies] Create new',
);

export const editStudy = createAction(
  '[Studies] Edit',
  props<{uid: number}>()
);

export const editStudyLoaded = createAction(
  '[Studies] Edit Loaded',
  props<{study: VocationalStudy | CollegeStudy}>()
);

export const updateStudy = createAction(
  '[Studies] Update',
  props<{study: VocationalStudy | CollegeStudy}>()
);

export const updateStudySuccess = createAction(
  '[Studies] Update Success',
);

export const saveStudy = createAction(
  '[Studies] Save',
  props<{study: VocationalStudy | CollegeStudy}>()
);

export const saveStudySuccess = createAction(
  '[Studies] Save Success',
);
