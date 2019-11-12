import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';

export const deleteStudy = createAction(
  '[Studies] Delete',
  props<{id: number}>()
);

export const deleteStudySuccess = createAction(
  '[Studies] Delete Success',
  props<{id: number}>()
);
