import { UserState, LanguagesState, initialState } from '../user.interface';
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

export const reducer = createReducer(
  null,
  on(LanguagesActions.newLanguage, (state: LanguagesState) => ({
    ...state,
    selected: {},
  })),

  on(LanguagesActions.editLanguage, (state: LanguagesState) => ({
    ...state,
    selected: null,
  })),

  on(LanguagesActions.editLanguageLoaded, (state: LanguagesState, {language}) => ({
    ...state,
    selected: language,
  })),

  on(LanguagesActions.updateLanguageSuccess, (state: LanguagesState) => ({
    ...state,
    selected: null,
  })),

  on(LanguagesActions.saveLanguageSuccess, (state: LanguagesState) => ({
    ...state,
    selected: null,
  })),
);
