import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';

export const deleteLanguage = createAction(
  '[Languages] Delete',
  props<{id: number}>()
);

export const deleteLanguageSuccess = createAction(
  '[Languages] Delete Success',
  props<{id: number}>()
);
