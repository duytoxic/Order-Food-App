import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Icon from '../../components/common/Icon';

import {GRAY_1_COLOR, PRIMARY_COLOR, GRAY_2_COLOR} from '../../theme/colors';

const icons = {
  home: {
    type: 'entypo',
    name: 'home',
    size: 24,
  },
  search: {
    type: 'ant-design',
    name: 'search1',
    size: 20,
  },
};

function MenuScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.brand}>
          <View style={styles.iconContainer}>
            <TouchableOpacity activeOpacity={0.6}>
              <Icon {...icons.home} style={styles.iconHome} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBar}>
            <Icon {...icons.search} style={styles.iconSearch} />
            <TextInput placeholder="Tìm kiếm món ăn" style={styles.textInput} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  brand: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 15,
  },
  iconContainer: {
    backgroundColor: GRAY_1_COLOR,
    height: 37,
    width: 37,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  iconHome: {
    color: PRIMARY_COLOR,
  },
  searchBar: {
    flex: 1,
    marginLeft: 15,
    backgroundColor: GRAY_1_COLOR,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 5,
    height: 37,
  },
  iconSearch: {
    color: GRAY_2_COLOR,
    marginLeft: 10,
  },
  textInput: {
    color: GRAY_2_COLOR,
    marginLeft: 30,
    // paddingTop: 0,
  },
});

export default MenuScreen;
