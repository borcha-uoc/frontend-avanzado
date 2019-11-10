import { Action, combineReducers } from '@ngrx/store';
import { AuthState } from '../auth.interface';
import * as fromAuth from './auth.reducer';

let reducers = fromAuth.reducer;

export { reducers };