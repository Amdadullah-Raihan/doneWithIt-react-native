import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'

const ProductScreen = () => {
  return (
    <View style={styles.productContainer}>
       <Card title="Red Jacket For Sale" subTitle="$100" image={require("../assets/jacket.jpg")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    productContainer: {
        flex: 1,
        paddingHorizontal: 15,
    }
})

export default ProductScreen
