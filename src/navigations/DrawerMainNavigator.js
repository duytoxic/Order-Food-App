import React from 'react';
import {Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeNavigator from './HomeNavigator';

import MenuScreen from '../screens/home/MenuScreen';
import TodoList from '../screens/todolist/TodoList';
import HomeScreen from '../screens/home/HomeScreen';

const Drawer = createDrawerNavigator();

function DrawerMainNavigator() {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          initialParams={{
            label: 'Tài khoản',
            type: 'account',
            iconName: 'user',
            iconType: 'font-awesome',
          }}
        />
        <Drawer.Screen
          name="Danh sách công việc"
          component={TodoList}
          initialParams={{
            label: 'Tài khoản',
            type: 'account',
            iconName: 'user',
            iconType: 'font-awesome',
          }}
        />
        <Drawer.Screen
          name="Cài đặt"
          component={HomeScreen}
          initialParams={{
            label: 'Tài khoản',
            type: 'account',
            iconName: 'user',
            iconType: 'font-awesome',
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

export default DrawerMainNavigator;
