import { UserState, StudiesState, initialState } from '../user.interface';
import { User } from '@app/shared/models/user.model';
import { StudiesActions } from '../actions';
import { createReducer, on } from '@ngrx/store';


export const userReducer = createReducer(
  null,
  on(StudiesActions.deleteStudySuccess, (state: User, {id}) => ({
    ...state,
    studies: state.studies.filter(s => s.uid !== id)
  })),
);

export const reducer = createReducer(
  null,
  on(StudiesActions.newStudy, (state: StudiesState) => ({
    ...state,
    selected: {},
  })),

  on(StudiesActions.editStudy, (state: StudiesState) => ({
    ...state,
    selected: null,
  })),

  on(StudiesActions.editStudyLoaded, (state: StudiesState, {study}) => ({
    ...state,
    selected: study,
  })),

  on(StudiesActions.updateStudySuccess, (state: StudiesState) => ({
    ...state,
    selected: null,
  })),

  on(StudiesActions.saveStudySuccess, (state: StudiesState) => ({
    ...state,
    selected: null,
  })),
);
