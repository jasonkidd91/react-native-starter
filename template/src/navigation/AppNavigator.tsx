import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';
import HomeDrawerNavigator from './navigators/HomeDrawerNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="HomeDrawerNavigator"
          component={HomeDrawerNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
