import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Swiper from 'react-native-swiper';
import {useSelector, useDispatch} from 'react-redux';
// import StarRating from '../components/StarRating';

import CategoryListPreview from '../../components/home/CategoryListPreview';
import RecentListFoods from '../../components/home/RecentListFoods';
import SafeAreaContainer from '../../components/common/SafeAreaContainer';

import ButtonTopControl from '../../components/common/ButtonTopControl';

import {
  getListCategories,
  selectListCategories,
} from '../../reducers/listCategories';

const HomeScreen = ({}) => {
  const dispatch = useDispatch();
  const listCategories = useSelector(selectListCategories);

  useEffect(() => {
    dispatch(getListCategories());
  }, [dispatch]);

  console.log(listCategories);
  const navigation = useNavigation();

  return (
    <SafeAreaContainer>
      <ScrollView style={styles.container}>
        <ButtonTopControl />
        <View style={styles.sliderContainer}>
          <Swiper
            autoplay
            // horizontal={false}
            height={200}
            activeDotColor="#FF6347">
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://hacentre.edu.vn/wp-content/uploads/2020/09/tu-vung-ve-nha-hang.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://hacentre.edu.vn/wp-content/uploads/2020/09/tu-vung-tieng-anh-chu-de-restaurant.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={{
                  uri: 'https://hacentre.edu.vn/wp-content/uploads/2020/09/tu-vung-chu-de-nha-hang.jpg',
                }}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>

        {listCategories && (
          <CategoryListPreview listCategories={listCategories} />
        )}

        <View style={styles.cardsWrapper}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 18,
              fontWeight: 'bold',
              color: '#333',
            }}>
            Recently Viewed
          </Text>
          {/* <RecentListFoods /> */}
        </View>
      </ScrollView>
    </SafeAreaContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default HomeScreen;
