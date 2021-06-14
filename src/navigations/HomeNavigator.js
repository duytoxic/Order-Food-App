import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Screen names
import {HOME_SCREEN, MENU_SCREEN} from './screenName';

// components
import HomeScreen from '../screens/home/HomeScreen';
import MenuScreen from '../screens/home/MenuScreen';

import {HIDDEN_HEADER} from './screenOptions';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={HOME_SCREEN}
        screenOptions={{
          ...HIDDEN_HEADER,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={MENU_SCREEN} component={MenuScreen} />
      </Stack.Navigator>
    </>
  );
}

export default HomeNavigator;
