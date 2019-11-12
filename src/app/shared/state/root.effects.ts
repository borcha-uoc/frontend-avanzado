import AuthEffectsArray from '@app/shared/state/auth/effects';
import UserEffectsArray from '@app/shared/state/user/effects';

export default [
  ...AuthEffectsArray,
  ...UserEffectsArray,
];