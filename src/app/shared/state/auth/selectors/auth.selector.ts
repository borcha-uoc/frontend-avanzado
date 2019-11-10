import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from '../auth.interface';

export const getErrorLogin = (state: AuthState) => state.error

export const getRecovered = (state: AuthState) => state.recovered