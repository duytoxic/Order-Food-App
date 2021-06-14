import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

import SafeAreaContainer from '../components/common/SafeAreaContainer';

import {BACKGROUND_COLOR, PRIMARY_COLOR} from '../theme/colors';

function LoadingScreen() {
  return (
    <>
      <SafeAreaContainer style={styles.container}>
        <ActivityIndicator size="large" color={PRIMARY_COLOR} />
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: BACKGROUND_COLOR,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default LoadingScreen;
