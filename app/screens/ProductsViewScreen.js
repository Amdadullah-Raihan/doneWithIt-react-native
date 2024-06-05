import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListFooter from '../components/ListFooter';

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
  const renderItem = ({ item }) => (
    <Card title={item.title} subTitle={item.subTitle} image={item.image} />
  );

  return (
    <Screen>
      <FlatList
        style={styles.productContainer}
        data={mockData}
        renderItem={renderItem}
        keyExtractor={(data) => data.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        ListFooterComponent={ListFooter}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    gap: 15,
  },
  footer: {
    height: 15,
  },
});

export default ProductsViewScreen;
