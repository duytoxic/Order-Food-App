import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import RecentFood from './RecentFood';
import axios from 'axios';

function RecentListFoods() {
  const [listRecentFood, setListRecentFood] = useState([]);

  const fetchListCategory = async () => {
    const response = await axios
      .get(
        'https://60bf76bc97295a0017c42f14.mockapi.io/orderfood/api/recentFoods',
      )

      .catch(err => {
        console.log('error', err);
      });
    setListRecentFood(response.data);
  };
  useEffect(() => {
    fetchListCategory();
  }, []);
  // console.log(listRecentFood);
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={listRecentFood}
          columnWrapperStyle={styles.wrapper}
          renderItem={({item, index}) => {
            return (
              <RecentFood
                name={item.name}
                descipt={item.descipt}
                imageURL={item.imageURL}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
});

export default RecentListFoods;
