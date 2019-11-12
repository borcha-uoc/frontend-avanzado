import { UserState, initialState } from '../user.interface';
import { User } from '@app/shared/models/user.model';
import { LanguagesActions } from '../actions';
import { createReducer, on } from '@ngrx/store';


export const userReducer = createReducer(
  null,
  on(LanguagesActions.deleteLanguageSuccess, (state: User, {id}) => ({
    ...state,
    languages: state.languages.filter(s => s.uid !== id)
  })),
);
