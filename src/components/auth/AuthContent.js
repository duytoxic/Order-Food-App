import React from 'react';
import {StyleSheet, View} from 'react-native';

import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';
import {MAIN_PADDING, WINDOW_HEIGHT} from '../../theme/sizes';

function AuthContent({children, style, wrapperStyle}) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: WHITE_COLOR,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: WINDOW_HEIGHT - 100,
    paddingTop: 10,
    paddingHorizontal: MAIN_PADDING,
  },
});

export default AuthContent;
