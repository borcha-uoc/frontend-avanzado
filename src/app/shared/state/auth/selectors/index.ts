import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../auth.interface';
import * as fromAuth from './auth.selector';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const getErrorLogin = createSelector(
  selectAuthState,
  fromAuth.getErrorLogin,
);

export const getRecovered = createSelector(
  selectAuthState,
  fromAuth.getRecovered,
);

