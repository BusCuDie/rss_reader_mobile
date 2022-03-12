import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, applyMiddleware, createStore} from 'redux';
import appReducer from './reducers/appReducer';
import {persistStore, persistReducer} from 'redux-persist';
import {AppState} from './reducers/appReducer';
import rootSaga from './saga/index';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: undefined,
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  application: appReducer,
});

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

export interface RootState {
  application: AppState;
}

export default store;
