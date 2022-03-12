import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import LoadingScreen from '@screens/LoadingScreen';
const Stack = createStackNavigator();
const options = {
  headerShown: false,
};
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoadingScreen">
      <Stack.Screen
        name="LoadingScreen"
        component={LoadingScreen}
        options={options}
      />
      <Stack.Screen name="AppStack" component={AppStack} options={options} />
      <Stack.Screen name="AuthStack" component={AuthStack} options={options} />
    </Stack.Navigator>
  );
};

export default MainStack;
