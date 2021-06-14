import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

import {
  RED_COLOR,
  PRIMARY_COLOR,
  GRAY_3_COLOR,
  BLACK_1_COLOR,
} from '../../theme/colors';
import {FONT_WEIGHT_BOLD} from '../../theme/typography';

import Icon from '../common/Icon';
import IconProduct from '../../components/common/IconProduct';

const icons = {
  heart: {
    type: 'ant-design',
    name: 'heart',
    size: 19,
  },
  plusCircle: {
    type: 'ant-design',
    name: 'pluscircle',
    size: 19,
  },
};

const ProductItem = ({imageURL, name, price}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <IconProduct />
          <Icon {...icons.heart} style={styles.iconHeart} />
        </View>
        <View style={styles.itemImage}>
          <Image
            source={{
              uri: imageURL,
            }}
            style={styles.imageProduct}
          />
        </View>
        <View style={styles.props}>
          <View>
            <Text style={styles.nameFood}>{name}</Text>
            <Text style={styles.price}>{price} đ</Text>
          </View>
          <Icon {...icons.plusCircle} style={styles.iconAdd} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 150,
    marginTop: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: GRAY_3_COLOR,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconHeart: {
    color: RED_COLOR,
    marginRight: 10,
  },
  itemImage: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageProduct: {
    flex: 1,
    width: 110,
    height: 110,
    borderRadius: 70,
  },
  props: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  nameFood: {
    fontSize: 13,
    color: BLACK_1_COLOR,
  },
  price: {
    fontSize: 16,
    fontWeight: FONT_WEIGHT_BOLD,
    color: PRIMARY_COLOR,
  },
  iconAdd: {
    color: PRIMARY_COLOR,
  },
});

export default ProductItem;
