import { props, createAction } from '@ngrx/store';
import { User } from '@app/shared/models/user.model';
import { Language } from '@app/shared/models/language.model';


export const deleteLanguage = createAction(
  '[Languages] Delete',
  props<{id: number}>()
);

export const deleteLanguageSuccess = createAction(
  '[Languages] Delete Success',
  props<{id: number}>()
);

export const newLanguage = createAction(
  '[Languages] Create new',
);

export const editLanguage = createAction(
  '[Languages] Edit',
  props<{uid: number}>()
);

export const editLanguageLoaded = createAction(
  '[Languages] Edit Loaded',
  props<{language: Language}>()
);

export const updateLanguage = createAction(
  '[Languages] Update',
  props<{language: Language}>()
);

export const updateLanguageSuccess = createAction(
  '[Languages] Update Success',
);

export const saveLanguage = createAction(
  '[Languages] Save',
  props<{language: Language}>()
);

export const saveLanguageSuccess = createAction(
  '[Languages] Save Success',
);
