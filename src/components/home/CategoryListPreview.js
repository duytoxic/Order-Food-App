import React from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import CategoryPreview from './CategoryPreview';

function CategoryListPreview({listCategories}) {
  return (
    <>
      <View style={styles.container}>
        {listCategories && (
          <FlatList
            numColumns={3}
            data={listCategories}
            columnWrapperStyle={styles.wrapper}
            renderItem={({item, index}) => {
              return (
                <CategoryPreview
                  nameCategory={item.nameCategory}
                  nameIcon={item.nameIcon}
                  namePage={item.namePage}
                />
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
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

export default CategoryListPreview;
