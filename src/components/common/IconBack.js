import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Icon from '../../components/common/Icon';

import {GRAY_1_COLOR, PRIMARY_COLOR} from '../../theme/colors';

// Define icons
const icons = {
  chevronLeft: {
    type: 'feather',
    name: 'chevron-left',
    size: 28,
  },
};

function IconBack() {
  const navigation = useNavigation();

  const onPress = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.container}
      onPress={onPress}>
      <Icon {...icons.chevronLeft} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    backgroundColor: GRAY_1_COLOR,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: PRIMARY_COLOR,
  },
});

export default IconBack;
