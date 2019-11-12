import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../user.interface';

export const getUserProfile = (state: UserState) => state.profile
