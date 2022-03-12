import {AnyAction} from 'redux';
import {LOGIN_SUCCESS, LOGOUT_ACTION} from '@store/actionTypes/authActions';
export type AppState = {
  userInfo: any;
  isLogin: boolean;
};

const defaultState: AppState = {
  userInfo: {},
  isLogin: false,
};

export default function appReducer(state = defaultState, action: AnyAction) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.user,
        isLogin: action.payload.isLogin,
      };
    case LOGOUT_ACTION: {
      return {
        ...state,
        userInfo: null,
        isLogin: false,
      };
    }
    default:
      return state;
  }
}
