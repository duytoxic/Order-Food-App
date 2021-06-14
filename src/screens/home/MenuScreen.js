import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from '../../components/common/Icon';

import ListProductItem from '../../components/menu/ListProductItem';
import {useNavigation} from '@react-navigation/core';

import {
  GRAY_1_COLOR,
  PRIMARY_COLOR,
  GRAY_2_COLOR,
  BLACK_1_COLOR,
  GRAY_3_COLOR,
} from '../../theme/colors';

import {FONT_WEIGHT_BOLD} from '../../theme/typography';

import {HOME_SCREEN} from '../../navigations/screenName';

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

const listTabs = [
  {
    taxonomy: 'Tất cả',
  },
  {
    taxonomy: 'Food',
  },
  {
    taxonomy: 'Drink',
  },
  {
    taxonomy: 'Vegetable',
  },
  {
    taxonomy: 'Cakes',
  },
  {
    taxonomy: 'Lẩu',
  },
  {
    taxonomy: 'BBQ',
  },
];

const nameTypes = [
  {
    name: 'Asian',
  },
  {
    name: 'Salad',
  },
  {
    name: 'Pizza',
  },
  {
    name: 'Chicken',
  },
  {
    name: 'Sushi',
  },
  {
    name: 'Noodles',
  },
  {
    name: 'Rice box',
  },
  {
    name: 'Hot',
  },
];

import listFoods from '../../data/listFood';

function MenuScreen() {
  const navigation = useNavigation();
  const [taxonomy, setTaxonomy] = useState('Tất cả');
  const [dataFilter, setDataFilter] = useState(listFoods);

  const [type, setType] = useState('Asian');

  const setTaxonomyFilter = status => {
    if (status !== 'Tất cả') {
      setDataFilter([...listFoods.filter(e => e.taxonomy === status)]);
    } else {
      setDataFilter(dataFilter);
    }
    setTaxonomy(status);
  };
  const setTypeFilter = status => {
    // if (status !== 'Tất cả') {
    //   setDataList([...data.filter(e => e.taxonomy === status)]);
    // } else {
    //   setDataList(data);
    // }
    setType(status);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.brand}>
          <View style={styles.iconContainer}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate(HOME_SCREEN)}>
              <Icon {...icons.home} style={styles.iconHome} />
            </TouchableOpacity>
          </View>
          <View style={styles.searchBar}>
            <Icon {...icons.search} style={styles.iconSearch} />
            <TextInput placeholder="Tìm kiếm món ăn" style={styles.textInput} />
          </View>
        </View>
        <View style={styles.listTabsNavigation}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {listTabs.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.taxonomyItem,
                    taxonomy === item.taxonomy && styles.taxonomyItemActive,
                  ]}
                  onPress={() => setTaxonomyFilter(item.taxonomy)}
                  key={index}>
                  <Text
                    style={[
                      styles.textTab,
                      taxonomy === item.taxonomy && styles.textTabActive,
                    ]}>
                    {item.taxonomy}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.listType}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {nameTypes.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.typeItem,
                    type === item.name && styles.typeItemActive,
                  ]}
                  onPress={() => setTypeFilter(item.name)}
                  key={index}>
                  <Text
                    style={[
                      styles.typeText,
                      type === item.name && styles.typeTextActive,
                    ]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        <View style={styles.listProduct}>
          <ListProductItem dataFilter={dataFilter} />
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
  },
  listTabsNavigation: {
    marginVertical: 15,
    marginHorizontal: 20,
  },
  taxonomyItem: {
    backgroundColor: GRAY_1_COLOR,
    marginRight: 12,
    borderRadius: 7,
    color: BLACK_1_COLOR,
  },
  taxonomyItemActive: {
    backgroundColor: PRIMARY_COLOR,
  },
  textTab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  textTabActive: {
    fontWeight: FONT_WEIGHT_BOLD,
  },

  listType: {
    marginHorizontal: 20,
  },
  typeItem: {
    marginRight: 10,
  },
  typeItemActive: {},
  typeText: {
    fontWeight: FONT_WEIGHT_BOLD,
    color: GRAY_3_COLOR,
    paddingHorizontal: 5,
    paddingVertical: 4,
  },
  typeTextActive: {
    fontWeight: FONT_WEIGHT_BOLD,
    color: BLACK_1_COLOR,
  },
  listProduct: {
    flex: 1,
    marginTop: 15,
  },
});

export default MenuScreen;
