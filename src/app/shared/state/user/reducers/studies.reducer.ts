import { UserState, initialState } from '../user.interface';
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
