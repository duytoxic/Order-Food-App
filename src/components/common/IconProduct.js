import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from './Icon';

import {PRIMARY_COLOR} from '../../theme/colors';

const icons = {
  circleThin: {
    type: 'font-awesome',
    name: 'circle-thin',
    size: 27,
  },
  circle: {
    type: 'font-awesome',
    name: 'circle',
    size: 15,
  },
};

function IconProduct() {
  return (
    <>
      <TouchableOpacity style={styles.container} activeOpacity={0.6}>
        <Icon {...icons.circleThin} style={styles.icon} />
        <Icon {...icons.circle} style={styles.icon} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    color: PRIMARY_COLOR,
  },
});

export default IconProduct;
