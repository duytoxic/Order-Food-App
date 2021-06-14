import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Icon from './Icon';

import {PRIMARY_COLOR} from '../../theme/colors';

const icons = {
  bars: {
    type: 'font-awesome-5',
    name: 'bars',
    size: 25,
  },
};

function ButtonToggleDrawer() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.toggleDrawer();
  };

  return (
    <TouchableOpacity
      style={styles.wrap}
      activeOpacity={0.6}
      onPress={() => openDrawer()}>
      <Icon {...icons.bars} style={styles.iconBar} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBar: {
    color: PRIMARY_COLOR,
  },
});

export default ButtonToggleDrawer;
