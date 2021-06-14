import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

// Components
import Icon from './Icon';

// Theme
import {BASE, MAIN_PADDING} from '../../theme/sizes';
import {GRAY_1_COLOR, GRAY_2_COLOR} from '../../theme/colors';

/**
 *
 * @param {import('react-native').TextInputProps} props
 */
function TextField({
  rightComp = null,
  styleWrapper,
  rightIcon = null,
  leftIcon = null,
  rightIconStyle,
  onPressRightIcon,
  style,
  ...otherProps
}) {
  return (
    <View style={[styles.container, styleWrapper]}>
      {leftIcon && (
        <Icon
          style={styles.icon}
          type={leftIcon.type}
          size={leftIcon.size}
          name={leftIcon.name}
          onPress={onPressRightIcon}
        />
      )}
      <TextInput
        placeholderTextColor={GRAY_2_COLOR}
        style={[styles.input, style]}
        underlineColorAndroid="transparent"
        {...otherProps}
      />

      {rightComp && rightComp()}

      {rightIcon && (
        <Icon
          style={[styles.icon, rightIconStyle]}
          type={rightIcon.type}
          size={rightIcon.size}
          name={rightIcon.name}
          onPress={onPressRightIcon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#f6f5f9',
    paddingVertical: 10,
    marginVertical: BASE,
    backgroundColor: GRAY_1_COLOR,
    height: 60,
  },
  input: {
    flex: 1,
    padding: 0,
    fontSize: 16,
    lineHeight: 22,
    color: GRAY_2_COLOR,
    backgroundColor: GRAY_1_COLOR,
  },
  icon: {
    marginHorizontal: BASE,
    color: GRAY_2_COLOR,
  },
});

export default TextField;
