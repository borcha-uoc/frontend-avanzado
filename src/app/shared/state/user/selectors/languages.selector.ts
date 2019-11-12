import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../user.interface';

export const getLanguages = (state: UserState) => state.profile.languages;
