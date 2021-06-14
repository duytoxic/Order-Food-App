// @ts-check
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {BASE} from '../../theme/sizes';
import {FONT_WEIGHT_BOLD} from '../../theme/typography';
import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

import Icon from './Icon';

const icons = {
  arrowRight: {
    name: 'arrowright',
    type: 'ant-design',
    size: 22,
  },
};

/**
 * Button
 * @typedef Props
 * @property {string} color
 * @property {string} title
 * @property {boolean} arrowRight
 * @property {() => void} onPress
 * @property {number} activeOpacity
 * @property {'solid' | 'clear' | 'outline'} type
 * @property {'capitalize' | 'lowercase'| 'uppercase' | 'none' } textTransform
 * @property {import('react-native').StyleProp<import('react-native').ViewStyle>} style
 * @property {import('react-native').StyleProp<import('react-native').TextStyle>} textStyle
 * @param {Props} props
 */
function Button({
  type,
  color,
  title,
  style,
  onPress,
  textStyle,
  arrowRight,
  textTransform,
  activeOpacity,
}) {
  const btnStyle = {
    borderColor: color,
    borderWidth: type === 'outline' ? 1 : 0,
    backgroundColor: type === 'solid' ? color : 'transparent',
  };

  const txtColor = {
    color: type === 'solid' ? '#fff' : color,
  };

  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={activeOpacity}
        style={[styles.container, btnStyle, style]}>
        <Text
          style={[styles.text, txtColor, {textTransform}, textStyle]}
          numberOfLines={1}>
          {title}
        </Text>
        {/* {arrowRight && (
          <View style={styles.icon}>
            <Icon />
          </View>
        )} */}
      </TouchableOpacity>
    </>
  );
}

Button.defaultProps = {
  type: 'solid',
  color: '#219653',
  arrowRight: false,
  activeOpacity: 0.7,
  textTransform: 'none',
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 40,
    marginVertical: BASE,
    paddingVertical: BASE * 2,
    paddingHorizontal: BASE * 4,
    backgroundColor: PRIMARY_COLOR,
  },
  text: {
    fontSize: 18,
    lineHeight: 22,
    letterSpacing: 1,
    alignSelf: 'center',
    fontWeight: FONT_WEIGHT_BOLD,
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    marginRight: BASE * 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
