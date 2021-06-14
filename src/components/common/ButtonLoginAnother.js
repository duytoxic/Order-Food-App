import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import Icon from './Icon';

import {PRIMARY_COLOR} from '../../theme/colors';

function ButtonLoginAnother({
  styleSignin,
  typeIcon,
  nameIcon,
  colorIcon,
  textSign,
  styleText,
}) {
  return (
    <>
      <TouchableOpacity style={[styles.signIn, styleSignin]}>
        <Icon
          type={typeIcon}
          color={colorIcon}
          name={nameIcon}
          style={styles.iconStyle}
          size={25}
        />
        <Text style={[styles.textSign, styleText]}>{textSign}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    flexDirection: 'row',
  },
  iconStyle: {
    marginRight: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ButtonLoginAnother;
