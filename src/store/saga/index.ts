import {fork} from 'typed-redux-saga';
import appSaga from './appSaga';

export default function* () {
  yield* fork(appSaga);
}
