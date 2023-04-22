import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from '../../screens/home/WelcomeScreen';
import TemplateScreen from '../../screens/home/TemplateScreen';

const BottomTab = createBottomTabNavigator();

const HomeTabNavigator = () => (
  <BottomTab.Navigator screenOptions={{ headerShown: false }}>
    <BottomTab.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        tabBarIconStyle: { display: 'none' },
        tabBarLabelPosition: 'beside-icon',
      }}
    />
    <BottomTab.Screen
      name="Template"
      component={TemplateScreen}
      options={{
        tabBarIconStyle: { display: 'none' },
        tabBarLabelPosition: 'beside-icon',
      }}
    />
  </BottomTab.Navigator>
);

export default HomeTabNavigator;
