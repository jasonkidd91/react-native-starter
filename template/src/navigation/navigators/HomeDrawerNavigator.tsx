import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabNavigator from './HomeTabNavigator';

const Drawer = createDrawerNavigator();

const HomeDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeTabNavigator} />
    </Drawer.Navigator>
  );
};

export default HomeDrawerNavigator;
