import * as APIUtil from '../util/follow_api_util';
import {receiveCurrentUser} from './session_actions';

export const deleteFollow = (follow) => (dispatch) =>
    APIUtil.destroyFollow(follow).then((user) => dispatch(receiveCurrentUser(user)));

export const createFollow = (follow) => (dispatch) => {
    return APIUtil.createFollow(follow).then((user) => dispatch(receiveCurrentUser(user)));
};
