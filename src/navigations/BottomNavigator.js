import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MenuScreen from '../screens/home/MenuScreen';
import HomeScreen from '../screens/home/HomeScreen';

import {BLUE_COLOR, GRAY_2_COLOR, PRIMARY_COLOR} from '../theme/colors';

import Icon from '../components/common/Icon';

const Tab = createBottomTabNavigator();

const icons = {
  restaurant: {
    type: 'material',
    name: 'restaurant',
    size: 27,
  },
  accountCircle: {
    type: 'material',
    name: 'account-circle',
    size: 30,
  },
  shoppingCart: {
    type: 'font-awesome',
    name: 'shopping-cart',
    size: 27,
  },
  setting: {
    type: 'ionicon',
    name: 'settings',
    size: 27,
  },
  plusCircle: {
    type: 'ant-design',
    name: 'pluscircle',
    size: 35,
  },
};

const SettingsScreen = () => {
  return (
    <View>
      <Text>settings</Text>
    </View>
  );
};

function BottomNavigator() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: styles.bottomTabBar,
        }}>
        <Tab.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Icon
                  {...icons.restaurant}
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }
                />
                <Text
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }>
                  Menu
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Tài khoản"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Icon
                  {...icons.accountCircle}
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }
                />
                <Text
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }>
                  Tài khoản
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Post"
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused = true}) => (
              <Icon
                {...icons.plusCircle}
                style={
                  focused
                    ? [styles.tabItem, styles.tabItemActive]
                    : styles.tabItem
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Giỏ hàng"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Icon
                  {...icons.shoppingCart}
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }
                />
                <Text
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }>
                  Giỏ hàng
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Cài đặt"
          component={MenuScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View style={styles.tabContainer}>
                <Icon
                  {...icons.setting}
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }
                />
                <Text
                  style={
                    focused
                      ? [styles.tabItem, styles.tabItemActive]
                      : styles.tabItem
                  }>
                  Cài đặt
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 70,
  },
  bottomTabBar: {
    backgroundColor: BLUE_COLOR,
    height: 70,
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tabContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabItem: {
    color: GRAY_2_COLOR,
  },
  tabItemActive: {
    color: PRIMARY_COLOR,
  },
  customTabBar: {
    position: 'absolute',
    top: -30,
  },
});

export default BottomNavigator;
