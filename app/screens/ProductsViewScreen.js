import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'

const ProductsViewScreen = () => {
  return (
    <SafeAreaView style={styles.productContainer}>
      <Card title="Red Jacket For Sale" subTitle="$100" image={require("../assets/jacket.jpg")}/>
      <Card title="Red Jacket For Sale" subTitle="$100" image={require("../assets/jacket.jpg")}/>
      <Card title="Red Jacket For Sale" subTitle="$100" image={require("../assets/jacket.jpg")}/>
      <Card title="Red Jacket For Sale" subTitle="$100" image={require("../assets/jacket.jpg")}/>
      <Card title="Red Jacket For Sale" subTitle="$100" image={require("../assets/jacket.jpg")}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    productContainer: {
        overflow: "scroll",
        paddingHorizontal: 15,
        gap: 15,
    }
})

export default ProductsViewScreen
