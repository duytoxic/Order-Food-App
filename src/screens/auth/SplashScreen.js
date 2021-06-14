import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import SafeAreaContainer from '../../components/common/SafeAreaContainer';

import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/core';

import {SIGN_IN_SCREEN} from '../../navigations/screenName';

import {
  PRIMARY_COLOR,
  WHITE_COLOR,
  BLACK_1_COLOR,
  GRAY_1_COLOR,
} from '../../theme/colors';

import Icon from '../../components/common/Icon';
import {BASE} from '../../theme/sizes';
import {FONT_WEIGHT_BOLD} from '../../theme/typography';

const icons = {
  arrowright: {
    type: 'ant-design',
    name: 'arrowright',
    size: 24,
  },
};

function SplashScreen() {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaContainer>
        <View style={styles.container}>
          <View style={styles.header}>
            <Animatable.Image
              animation="bounceIn"
              duration={1500}
              style={styles.logoImage}
              source={require('../../../assets/logo.jpg')}
              resizeMode="stretch"
            />
          </View>
          <Animatable.View animation="fadeInUpBig" style={styles.footer}>
            <Text style={styles.title}>Vui lòng được phục vụ quý khách!</Text>
            <Text style={styles.text}>Đăng nhập bằng tài khoản</Text>
            <View style={styles.btn}>
              <TouchableOpacity
                style={styles.btnSignin}
                onPress={() => navigation.navigate(SIGN_IN_SCREEN)}>
                <Text style={styles.signin}>Đăng nhập</Text>
                <Icon {...icons.arrowright} style={styles.iconRight} />
              </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
      </SafeAreaContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 400,
    height: 400,
  },
  footer: {
    backgroundColor: GRAY_1_COLOR,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: FONT_WEIGHT_BOLD,
    color: PRIMARY_COLOR,
    textAlign: 'center',
    marginVertical: 15,
  },
  text: {
    color: BLACK_1_COLOR,
    marginLeft: BASE * 3,
    marginBottom: 30,
  },
  btn: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnSignin: {
    width: 140,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: PRIMARY_COLOR,
  },
  signin: {
    color: WHITE_COLOR,
    fontSize: 16,
    marginRight: 5,
  },
  iconRight: {color: WHITE_COLOR},
});

export default SplashScreen;
