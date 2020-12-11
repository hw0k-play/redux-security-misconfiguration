import { combineReducers } from "redux";

import user from './user';
import food from './food';

const rootReducer = combineReducers({
  user,
  food,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
