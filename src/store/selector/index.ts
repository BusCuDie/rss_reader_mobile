import {RootState} from '@store/index';

export const getUserInforSelector = (state: RootState) => {
  return state.application.userInfo;
};

export const isLoginSelector = (state: RootState) => state.application.isLogin;
