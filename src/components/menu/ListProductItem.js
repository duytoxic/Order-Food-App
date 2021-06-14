import React, {useRef} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';

import ProductItem from '../../components/menu/ProductItem';

function ListProductItem({dataFilter}) {
  const scrollA = useRef(new Animated.Value(0).current);

  return (
    <>
      <View style={styles.container}>
        <Animated.FlatList
          numColumns={2}
          data={dataFilter}
          columnWrapperStyle={styles.wrapper}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <ProductItem
                  imageURL={item.imageURL}
                  name={item.nameFood}
                  price={item.price}
                />
              </TouchableOpacity>
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
    flex: 1,
  },
  wrapper: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default ListProductItem;
