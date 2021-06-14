import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

// Components
import IconBack from '../../components/common/IconBack';
import {BASE, MAIN_PADDING} from '../../theme/sizes';
import {BLACK_1_COLOR, WHITE_COLOR} from '../../theme/colors';

import {FONT_WEIGHT_BOLD} from '../../theme/typography';

function AuthHeader({style, iconStyle, textBrand}) {
  return (
    <>
      <View style={[styles.container, style]}>
        <IconBack style={styles.iconBack} />
        <Text style={styles.textBrand}>{textBrand}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: BASE * 2,
    paddingLeft: MAIN_PADDING,
  },
  textBrand: {
    fontWeight: FONT_WEIGHT_BOLD,
    fontSize: 24,
    marginTop: 20,
    color: WHITE_COLOR,
  },
});

export default AuthHeader;
