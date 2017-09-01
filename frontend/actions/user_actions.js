import * as UserAPIUtil from '../util/user_api_util';
import { REQUEST_DATA, requestData } from './story_actions'; 

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
};

export const fetchUser = id => dispatch => {
  dispatch(requestData());
  return UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
};