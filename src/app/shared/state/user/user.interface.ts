import { User } from '@app/shared/models/user.model';

export interface UserState {
  profile: User | null,
  // studies: StudiesState,
  // experiencies: ExperienciesState,
  // languages: LanguagesState,
}

export const initialState: UserState = {
  profile: null,
};
