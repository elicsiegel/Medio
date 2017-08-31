import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
};

export const fetchUser = id => dispatch => {
  return UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)))
};