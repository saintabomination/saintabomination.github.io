import { combineReducers } from 'redux';

import desktopReducer from './reducers/desktopReducer';

const rootReducer = combineReducers({
  desktop: desktopReducer,
});


export default rootReducer;
