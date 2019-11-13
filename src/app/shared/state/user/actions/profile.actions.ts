import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';

export const loadUser = createAction(
  '[Profile] LoadUser',
);

export const loadUserSuccess = createAction(
  '[Profile] LoadUser Success',
  props<{user: User}>()
);

export const saveUser = createAction(
  '[Profile] Save user',
  props<{user: User}>()
);

export const saveUserSuccess = createAction(
  '[Profile] Save user Success',
  props<{user: User}>()
);
