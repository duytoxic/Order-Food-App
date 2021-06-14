import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Icon from './Icon';

import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

const icons = {
  search: {
    type: 'feather',
    name: 'search',
    size: 20,
  },
};

function ButtonSearch() {
  return (
    <TouchableOpacity style={styles.wrap} activeOpacity={0.6}>
      <Icon {...icons.search} style={styles.iconBar} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
    width: 35,
    height: 35,
    borderRadius: 50,
  },
  iconBar: {
    color: WHITE_COLOR,
  },
  text: {
    color: '#219653',
    marginLeft: 12,
  },
});

export default ButtonSearch;
