import { User } from '@app/shared/models/user.model';
import { Study } from '@app/shared/models/study.model';

export interface StudiesState {
  selected: Study | null,
}

export interface UserState {
  profile: User | null,
  studies: StudiesState,
  // experiencies: ExperienciesState,
  // languages: LanguagesState,
}

export const initialState: UserState = {
  profile: null,
  studies: { selected: null },
};
