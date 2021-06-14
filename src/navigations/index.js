import React, {useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import DrawerMainNavigator from './DrawerMainNavigator';
import AuthNavigator from './AuthNavigator';

function Navigation() {
  const [isAuth, setIsAuth] = useState(false);

  const theme = 'dark';
  const barStyle = `${theme === 'light' ? 'dark-content' : 'light-content'}`;
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar
            barStyle={barStyle}
            translucent={true}
            // backgroundColor={'transparent'}
          />
          {/* <DrawerMainNavigator /> */}
          {isAuth ? <DrawerMainNavigator /> : <AuthNavigator />}
          {/* <HomeNavigator /> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default Navigation;
