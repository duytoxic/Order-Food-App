import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

// Screen names
import {
  SIGN_IN_SCREEN,
  SIGN_UP_SCREEN,
  SPLASH_SCREEN,
  HOME_SCREEN,
  MENU_SCREEN,
} from './screenName';

// components
import SignInScreen from '../screens/auth/SignInScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';
import SplashScreen from '../screens/auth/SplashScreen';
import HomeScreen from '../screens/home/HomeScreen';
import MenuScreen from '../screens/home/MenuScreen';
import DrawerMainNavigator from './DrawerMainNavigator';

import {HIDDEN_HEADER} from './screenOptions';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <>
      <Stack.Navigator
        initialRouteName={SPLASH_SCREEN}
        screenOptions={{
          ...HIDDEN_HEADER,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={SIGN_IN_SCREEN} component={SignInScreen} />
        <Stack.Screen name={SIGN_UP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name="drawer" component={DrawerMainNavigator} />
        {/* test */}
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={MENU_SCREEN} component={MenuScreen} />
      </Stack.Navigator>
    </>
  );
}

export default AuthNavigator;
