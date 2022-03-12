import React, {createRef} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

export const navigateOptions: StackNavigationOptions = {
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

export const navigationRef: any = createRef<any>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function push(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export function pop() {
  navigationRef.current?.dispatch(StackActions.pop(1));
}

export function getNavigation() {
  return navigationRef.current;
}

export function navigateReset(stackName: string, params?: any) {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: stackName, params}],
  });
}
