import * as APIUtil from '../util/bookmark_api_util';
import {receiveCurrentUser} from './session_actions';

export const deleteBookmark = (bookmark) => (dispatch) =>
    APIUtil.destroyBookmark(bookmark).then((user) => dispatch(receiveCurrentUser(user)));

export const createBookmark = (bookmark) => (dispatch) => {
    return APIUtil.createBookmark(bookmark).then((user) => dispatch(receiveCurrentUser(user)));
};
