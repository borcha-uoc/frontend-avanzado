import { User } from '@app/shared/models/user.model';

export interface AuthState {
  error: boolean,
  user: User | null,
  recovered: boolean | null,
}

export const initialState: AuthState = {
  error: false,
  user: null,
  recovered: null
};
