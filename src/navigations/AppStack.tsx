import React, {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigateOptions} from './index';
import DrawerComponent from './DrawerComponent';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={{...navigateOptions}}>
      <Stack.Screen
        name="DrawerComponent"
        component={DrawerComponent}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
