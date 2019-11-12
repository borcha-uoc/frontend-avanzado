import * as authReducer from '@app/shared/state/auth/reducers';
import * as userReducer from '@app/shared/state/user/reducers';

 export const reducers = {
   auth: authReducer.reducers,
   user: userReducer.reducers,
 };

