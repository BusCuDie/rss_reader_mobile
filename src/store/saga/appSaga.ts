import {AnyAction} from 'redux';
import {all, put, takeLatest} from 'typed-redux-saga';
import {LOGIN_ACTON, loginSuccess} from '@store/actionTypes/authActions';
export function* loginSaga(action: AnyAction) {
  console.log('action Saga', action);
  const {user} = action;
  if (user) {
    yield* put(loginSuccess(user, true));
  } else {
    console.log(user);
  }
}

export default function* () {
  yield* all([takeLatest(LOGIN_ACTON, loginSaga)]);
}
