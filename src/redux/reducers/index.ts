import newsReducer from './news';
import { combineReducers } from 'redux';

// Combine all the reducers
const rootReducer = combineReducers({
  newsReducer,
});
export default rootReducer;
