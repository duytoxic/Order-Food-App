import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import SafeAreaContainer from '../common/SafeAreaContainer';

import {PRIMARY_COLOR} from '../../theme/colors';
import {MAIN_PADDING} from '../../theme/sizes';

function AuthContainer({children, style, wrapperStyle}) {
  return (
    <SafeAreaContainer style={[styles.bgColor, style]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexOne}>
        <ScrollView style={[styles.container, wrapperStyle]}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  bgColor: {
    backgroundColor: PRIMARY_COLOR,
  },
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    // paddingHorizontal: MAIN_PADDING,
  },
});

export default AuthContainer;
