import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigateOptions} from './index';
import HomeScreen from '@screens/home';
import WebViewScreen from '@screens/WebViewScreen';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{...navigateOptions}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WebViewScreen"
        component={WebViewScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
