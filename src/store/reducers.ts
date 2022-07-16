import { combineReducers } from 'redux';

import { breedReducer } from './breed';
import { currentRequestReducer } from './global-request';

export const rootReducer = combineReducers({
  breed: breedReducer,
  currentRequest: currentRequestReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
