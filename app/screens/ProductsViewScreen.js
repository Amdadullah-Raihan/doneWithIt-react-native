import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';

const mockData = [
  {
    id: '1',
    title: 'Red Jacket For Sale',
    subTitle: '$100',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: '2',
    title: 'Blue Jacket For Sale',
    subTitle: '$150',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: '3',
    title: 'Green Jacket For Sale',
    subTitle: '$120',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: '4',
    title: 'Yellow Jacket For Sale',
    subTitle: '$130',
    image: require('../assets/jacket.jpg'),
  },
  {
    id: '5',
    title: 'Black Jacket For Sale',
    subTitle: '$110',
    image: require('../assets/jacket.jpg'),
  },
];

const ProductsViewScreen = () => {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.productContainer}
        data={mockData}
        keyExtractor={(data) => data.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    gap: 15,
  },
});

export default ProductsViewScreen;
