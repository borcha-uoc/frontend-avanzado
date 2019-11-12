import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../user.interface';
import * as fromProfile from './profile.selector';
import * as fromStudies from './studies.selector';
import * as fromLanguages from './languages.selector';

export const selectUserState = createFeatureSelector<UserState>('user');

export const getUserProfile = createSelector(
  selectUserState,
  fromProfile.getUserProfile,
);

export const getStudies = createSelector(
  selectUserState,
  fromStudies.getStudies,
);

export const getLanguages = createSelector(
  selectUserState,
  fromLanguages.getLanguages,
);
