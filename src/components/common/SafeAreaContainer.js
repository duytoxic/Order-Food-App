import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {PRIMARY_COLOR} from '../../theme/colors';

/**
 * Mặc định màu nền là màu xanh (PRIMARY_COLOR)
 * @param {{style: import('react-native').StyleProp<import('react-native').ViewStyle>}} props
 */
function SafeAreaContainer({children, style, ...otherProps}) {
  return (
    <SafeAreaView style={[styles.container, style]} {...otherProps}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: PRIMARY_COLOR,
  },
});

export default SafeAreaContainer;
