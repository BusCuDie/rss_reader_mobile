export const LOGIN_ACTON = 'LOGIN_ACTION';
export const loginAction = (user: any) => {
  return {
    type: LOGIN_ACTON,
    user,
  };
};

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const loginSuccess = (user: any, isLogin: boolean) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
      isLogin,
    },
  };
};

export const LOGOUT_ACTION = 'LOGOUT_ACTION';
export const logoutAction = () => {
  return {
    type: LOGOUT_ACTION,
  };
};
