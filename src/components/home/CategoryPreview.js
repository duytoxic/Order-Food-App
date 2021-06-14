import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Icon from '../common/Icon';

import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

import {MENU_SCREEN} from '../../navigations/screenName';

function CategoryPreview({nameCategory, nameIcon, namePage}) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate(MENU_SCREEN)}
        activeOpacity={0.6}>
        <View style={styles.categoryIcon}>
          <Icon type="material" name={nameIcon} size={35} color={WHITE_COLOR} />
        </View>
        <Text style={styles.categoryBtnTxt}>{nameCategory}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '30%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },
});

export default CategoryPreview;
