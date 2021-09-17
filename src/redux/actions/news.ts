import { Dispatch } from 'redux';
import { getRequest } from '../../network';
import { BASE_URL } from '../../global/constants';

export const SET_LATEST_NEWS = 'SET_LATEST_NEWS';

export function setLatestNews() {
  return (dispatch: Dispatch) => {
    const endpoint = `${BASE_URL}/newstories.json?print=pretty`;
    getRequest(endpoint)
      .then((response) => {
        // console.log('success', response.data);
        dispatch({
          type: SET_LATEST_NEWS,
          latestNewsIds: response.data,
        });
      })
      .catch((error) => {
          // console.log('get loggedin user error: ', error);
          dispatch({
            type: SET_LATEST_NEWS,
            latestNewsIds: [],
          });
      });
    };
}