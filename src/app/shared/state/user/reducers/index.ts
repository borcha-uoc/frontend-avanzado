import { Action, combineReducers } from '@ngrx/store';
import { pipe } from 'rxjs';
import { UserState, initialState } from '../user.interface';
import * as fromProfile from './profile.reducer';
import * as fromStudies from './studies.reducer';
import * as fromLanguages from './languages.reducer';

export function reducers(state: UserState = initialState, action: Action) {
  return combineReducers({
    profile: reduceReducers(
      fromProfile.reducer,
      fromStudies.userReducer,
      fromLanguages.userReducer,
    ),
    studies: fromStudies.reducer,
    languages: fromLanguages.reducer,
  })(state, action);
}

// https://stackoverflow.com/questions/32674767/redux-reducers-initializing-same-state-key
function reduceReducers(...reducers) {
  return (previous, current) =>
    reducers.reduce(
      (p, r) => r(p, current),
      previous
    );
}