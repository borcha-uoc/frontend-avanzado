import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../user.interface';
import * as fromProfile from './profile.selector';

export const selectUserState = createFeatureSelector<UserState>('user');

export const getUserProfile = createSelector(
  selectUserState,
  fromProfile.getUserProfile,
);
