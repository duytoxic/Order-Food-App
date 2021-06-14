import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

//components
import AuthContainer from '../../components/auth/AuthContainer';
import AuthHeader from '../../components/auth/AuthHeader';
import AuthContent from '../../components/auth/AuthContent';
import TextField from '../../components/common/TextField';
import Button from '../../components/common/Button';
import Hr from '../../components/common/Hr';
import ButtonLoginAnother from '../../components/common/ButtonLoginAnother';
import LoadingScreen from '../LoadingScreen';

import * as Animatable from 'react-native-animatable';

import {useNavigation} from '@react-navigation/core';

import {GRAY_2_COLOR, GRAY_3_COLOR, PRIMARY_COLOR} from '../../theme/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {HOME_SCREEN, SIGN_UP_SCREEN} from '../../navigations/screenName';

import {useSelector, useDispatch} from 'react-redux';
import {SignIn, selectUserId} from '../../reducers/listUser';
import {selectListCategories} from '../../reducers/listCategories';

// Define icons
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

function SignInScreen() {
  const [showPassWord, setShowPassWord] = useState(false);
  const [valid_email, setValid_email] = useState(true);
  const [valid_password, setValid_password] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

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

  const handleSubmit = () => {
    console.log(data);
    dispatch(SignIn());
  };

  return (
    <>
      <AuthContainer>
        <AuthHeader textBrand="Đăng nhập" />
        <Animatable.View animation="fadeInUpBig">
          <AuthContent>
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
                  Mật khẩu phải có ít nhất 8 ký tự
                </Text>
              </Animatable.View>
            )}
            <View style={styles.forgotPW}>
              <TouchableOpacity activeOpacity={0.6} style={styles.btnForgot}>
                <Text style={styles.textForgot}>Quên mật khẩu</Text>
              </TouchableOpacity>
            </View>
            <Button
              title="Đăng nhập"
              color={PRIMARY_COLOR}
              onPress={() => handleSubmit()}
            />
            <Hr text="Hoặc" lineStyle={styles.underline} />
            <ButtonLoginAnother
              nameIcon="logo-google"
              typeIcon="ionicon"
              colorIcon="#cf4332"
              textSign="Đăng nhập với Google"
              styleSignin={styles.signInGoogle}
              styleText={styles.textSignGoogle}
            />
            <ButtonLoginAnother
              nameIcon="facebook"
              typeIcon="font-awesome"
              colorIcon="#485a96"
              textSign="Đăng nhập với Facebook"
              styleSignin={styles.signInFacebook}
              styleText={styles.textSignFacebook}
            />

            <View style={styles.signupWrapper}>
              <Text style={styles.textAnswer}>Bạn chưa có tài khoản?</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate(SIGN_UP_SCREEN)}>
                <Text style={styles.txtSignUp}>Đăng ký</Text>
              </TouchableOpacity>
            </View>
          </AuthContent>
        </Animatable.View>
      </AuthContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  forgotPW: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnForgot: {
    width: 150,
  },
  textForgot: {
    color: GRAY_2_COLOR,
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
  },
  underline: {
    backgroundColor: GRAY_3_COLOR,
  },
  iconTyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signupWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  textAnswer: {
    color: GRAY_2_COLOR,
  },
  txtSignUp: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 15,
    color: PRIMARY_COLOR,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  signInGoogle: {
    borderColor: '#cf4332',
  },
  signInFacebook: {
    borderColor: '#485a96',
  },
  textSignFacebook: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#485a96',
  },
  textSignGoogle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#cf4332',
  },
  green: {
    color: '#1FD85F',
  },
  red: {
    color: '#EB5757',
  },
  errorMsg: {
    color: '#EB5757',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignInScreen;
