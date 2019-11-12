import { UserState, initialState } from '../user.interface';
import { ProfileActions } from '../actions';
import { createReducer, on } from '@ngrx/store';


export const reducer = createReducer(
  null,
  on(ProfileActions.loadUser, state => null),

  on(ProfileActions.loadUserSuccess, (state, {user}) => user),
  
);
