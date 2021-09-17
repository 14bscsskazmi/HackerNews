import { AnyAction } from 'redux';
import { SET_LATEST_NEWS }  from '../actions/news';

// Reducers (Modifies The State And Returns A New State)
export interface AuthState {

}
const initialState = { latestNewsIds: null }
const newsReducer = (
  state = initialState,
  action: AnyAction
): AuthState => {
  switch (action.type) {
    case SET_LATEST_NEWS: {
      // console.log('here', action.latestNewsIds);
      return {
        ...state,
        latestNewsIds: action.latestNewsIds
      }
    }
    default: {
      return state;
    }
  }
};
export default newsReducer;
