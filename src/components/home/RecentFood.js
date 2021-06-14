import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import Icon from '../common/Icon';
// import {StarRating} from '../home/StarRating';

import {PRIMARY_COLOR, WHITE_COLOR} from '../../theme/colors';

import {MENU_SCREEN} from '../../navigations/screenName';

function RecentFood({name, descipt, imageURL}) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity style={styles.card} activeOpacity={0.6}>
        <View style={styles.cardImgWrapper}>
          <Image
            source={{uri: imageURL}}
            resizeMode="cover"
            style={styles.cardImg}
          />
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{name}</Text>
          {/* <StarRating ratings={4} reviews={99} /> */}
          <Text style={styles.cardDetails}>{descipt}</Text>
        </View>
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
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});

export default RecentFood;
