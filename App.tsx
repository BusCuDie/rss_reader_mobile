import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '@navigations/index';
import MainStack from '@navigations/MainStack';
import store, {persistor} from '@store/index';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {Provider} from 'react-redux';
const RootComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </Provider>
    </>
  );
};
export default App;
