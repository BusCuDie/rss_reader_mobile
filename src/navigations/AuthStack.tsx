import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigateOptions} from './index';
import LoginScreen from '@screens/authen/LoginScreen';
const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{...navigateOptions}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
