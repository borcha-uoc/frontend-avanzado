import { User } from '@app/shared/models/user.model';
import { Study } from '@app/shared/models/study.model';
import { Language } from '@app/shared/models/language.model';

export interface StudiesState {
  selected: Study | null,
}

export interface LanguagesState {
  selected: Language | null,
}

export interface UserState {
  profile: User | null,
  studies: StudiesState,
  languages: LanguagesState,
  // experiencies: ExperienciesState,
}

export const initialState: UserState = {
  profile: null,
  studies: { selected: null },
  languages: { selected: null },
};
