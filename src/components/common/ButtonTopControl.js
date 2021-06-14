import React from 'react';
import {View, StyleSheet} from 'react-native';

import ButtonToggleDrawer from './ButtonToggleDrawer';
import ButtonSearch from './ButtonSearch';

import {BASE, MAIN_PADDING} from '../../theme/sizes';

function ButtonTopControl() {
  return (
    <>
      <View style={styles.container}>
        <ButtonToggleDrawer />
        <ButtonSearch />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: MAIN_PADDING,
    marginVertical: BASE,
  },
});

export default ButtonTopControl;
