import { AuthState, initialState } from '../auth.interface';
import { AuthActions } from '@app/shared/state/auth/actions';
import { createReducer, on } from '@ngrx/store';


export const reducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({
    ...state,
    error: false,
    user: null,
  })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    error: false,
    user,
  })),
  
  on(AuthActions.loginFailure, state => ({
    ...state,
    error: true,
  }))
);
