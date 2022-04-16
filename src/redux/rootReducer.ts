import { combineReducers } from 'redux';

import desktopReducer from './reducers/desktopReducer';

const rootReducer = combineReducers({
  desktop: desktopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
