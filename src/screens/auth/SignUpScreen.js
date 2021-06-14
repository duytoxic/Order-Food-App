import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, ScrollView, Alert} from 'react-native';

//components
import AuthContainer from '../../components/auth/AuthContainer';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthContent from '../../components/auth/AuthContent';
import TextField from '../../components/common/TextField';
import Button from '../../components/common/Button';
import * as Animatable from 'react-native-animatable';
import {useTheme} from 'react-native-paper';
import {useNavigation} from '@react-navigation/core';

import {PRIMARY_COLOR} from '../../theme/colors';

import {useDispatch} from 'react-redux';
import {SignUp} from '../../reducers/listUser';

const SignUpScreen = () => {
  const [showPassWord, setShowPassWord] = useState(false);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [valid_email, setValid_email] = useState(true);
  const [valid_password, setValid_password] = useState(true);
  const [valid_ConfirmPassword, setValid_ConfirmPassword] = useState(true);
  const {colors} = useTheme();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const icons = {
    user: {
      name: 'user',
      type: 'feather',
      size: 22,
    },
    lock: {
      name: 'lock',
      type: 'feather',
      size: 22,
    },
    eye: {
      name: 'eye',
      type: 'feather',
      size: 22,
    },
    eyeOff: {
      type: 'feather',
      name: 'eye-off',
      size: 22,
    },
    check: {
      type: 'feather',
      name: 'check-circle',
      size: 22,
    },
    x: {
      type: 'feather',
      name: 'x-circle',
      size: 22,
    },
    facebook: {
      type: 'font-awesome-5',
      name: 'facebook-f',
      size: 25,
    },
    twitter: {
      type: 'ant-design',
      name: 'twitter',
      size: 25,
    },
    google: {
      type: 'ant-design',
      name: 'google',
      size: 25,
    },
  };

  const EmailChange = val => {
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) {
      setData({
        ...data,
        email: val,
      });
      setValid_email(true);
    } else {
      setValid_email(false);
    }
  };

  const PasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
      });
      setValid_password(true);
    } else {
      setValid_password(false);
    }
  };

  const ConfirmPasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        confirmPassword: val,
      });
      setValid_ConfirmPassword(true);
    } else {
      setValid_ConfirmPassword(false);
    }
  };
  const handleSubmit = () => {
    dispatch(SignUp(data.email, data.password));
    Alert.alert('Thông báo', 'Đăng ký tài khoản thành công', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          }
        },
      },
    ]);
    // if (
    //   valid_email &&
    //   valid_password &&
    //   valid_ConfirmPassword &&
    //   data.email &&
    //   data.password &&
    //   data.confirmPassword
    // ) {
    //   dispatch(SignUp(data.email, data.password));
    // } else {
    //   setValid_email(false);
    //   setValid_password(false);
    //   setValid_ConfirmPassword(false);
    // }
  };

  useEffect(() => {
    return () => {
      // dispatch.clearError();
    };
  }, []);

  return (
    <>
      <AuthContainer>
        <AuthHeader textBrand="Đăng ký!" />
        <Animatable.View animation="fadeInUpBig">
          <AuthContent>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={[styles.text_footer, {color: colors.text}]}>
                Email
              </Text>
              <TextField
                onChangeText={val => EmailChange(val)}
                placeholder="Nhập email"
                keyboardType="email-address"
                autoCompleteType="email"
                autoCapitalize="none"
                rightIconStyle={
                  valid_email && data.email !== '' ? styles.green : styles.red
                }
                rightIcon={
                  valid_email === null
                    ? null
                    : valid_email
                    ? icons.check
                    : icons.x
                }
                leftIcon={icons.user}
              />
              {!valid_email && (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>email không hợp lệ</Text>
                </Animatable.View>
              )}
              <Text style={[styles.text_footer]}>Password</Text>

              <TextField
                onChangeText={val => PasswordChange(val)}
                placeholder="Mật khẩu"
                keyboardType="default"
                multiline={false}
                secureTextEntry={!showPassWord}
                rightIcon={showPassWord ? icons.eye : icons.eyeOff}
                onPressRightIcon={() => setShowPassWord(!showPassWord)}
                leftIcon={icons.lock}
                autoCapitalize="none"
              />

              {!valid_password && (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>
                    mật khẩu phải ít nhất 8 ký tự
                  </Text>
                </Animatable.View>
              )}
              <Text style={[styles.text_footer]}>Confirm Password</Text>
              <TextField
                onChangeText={val => ConfirmPasswordChange(val)}
                placeholder="Xác nhận mật khẩu"
                keyboardType="default"
                multiline={false}
                secureTextEntry={!hideConfirmPassword}
                rightIcon={hideConfirmPassword ? icons.eye : icons.eyeOff}
                onPressRightIcon={() =>
                  setHideConfirmPassword(!hideConfirmPassword)
                }
                leftIcon={icons.lock}
                autoCapitalize="none"
              />

              {!valid_ConfirmPassword && (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>
                    nhập lại mật khẩu không đúng
                  </Text>
                </Animatable.View>
              )}
              <Button
                title="Đăng ký"
                color={PRIMARY_COLOR}
                onPress={() => handleSubmit()}
              />

              {/* {stateAuth.error !== '' && (
            <View
              style={{
                marginTop: 10,
                alignItems: 'center',
              }}>
              <Text style={[styles.errorMsg, {fontSize: 17}]}>
                {stateAuth.error}
              </Text>
            </View>
          )} */}
            </ScrollView>
          </AuthContent>
        </Animatable.View>
      </AuthContainer>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  green: {
    color: '#1FD85F',
  },
  red: {
    color: '#EB5757',
  },
});
