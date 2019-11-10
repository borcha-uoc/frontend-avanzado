import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string, password: string  }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure'
);

export const recoverPassword = createAction(
  '[Auth] Recover Password',
  props<{ email: string }>()
);

export const recoverPasswordSuccess = createAction(
  '[Auth] Recover Password Success',
);

export const recoverPasswordFailure = createAction(
  '[Auth] Recover Password Failure',
);
