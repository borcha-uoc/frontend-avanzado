import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';
import { Study } from '@app/shared/models/study.model';

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
  props<{study: Study}>()
);
