import { Action, combineReducers } from '@ngrx/store';
import { UserState } from '../user.interface';
import * as fromProfile from './profile.reducer';

export function reducers(state: UserState | undefined, action: Action) {
  return combineReducers({
    profile: fromProfile.reducer,
  })(state, action);
}