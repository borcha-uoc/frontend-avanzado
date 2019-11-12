import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UserState } from '../user.interface';

export const getStudies = (state: UserState) => state.profile.studies;
