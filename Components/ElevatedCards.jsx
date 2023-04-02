import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
    <Text style={styles.headingText}>Elevated Cards</Text>
    <ScrollView horizontal>
      <View style={[styles.card , styles.cardOne]}>
          <Text style ={styles.text}>Red</Text>
      </View>
      <View style={[styles.card , styles.cardOne]}>
          <Text style ={styles.text}>Red</Text>
      </View>
      <View style={[styles.card , styles.cardOne]}>
          <Text style ={styles.text}>Red</Text>
      </View>
      <View style={[styles.card , styles.cardOne]}>
          <Text style ={styles.text}>Red</Text>
      </View>
      <View style={[styles.card , styles.cardOne]}>
          <Text style ={styles.text}>Red</Text>
      </View>
      <View style={[styles.card , styles.cardOne]}>
          <Text style ={styles.text}>Red</Text>
      </View>
      <View style={[styles.card , styles.cardSecond]}>
          <Text style ={styles.text}>Blue</Text>
      </View>
      <View style={[styles.card , styles.cardSecond]}>
          <Text style ={styles.text}>Blue</Text>
      </View>
      <View style={[styles.card , styles.cardSecond]}>
          <Text style ={styles.text}>Blue</Text>
      </View>
      <View style={[styles.card , styles.cardSecond]}>
          <Text style ={styles.text}>Blue</Text>
      </View>
      <View style={[styles.card , styles.cardSecond]}>
          <Text style ={styles.text}>Blue</Text>
      </View>
      <View style={[styles.card , styles.cardSecond]}>
          <Text style ={styles.text}>Blue</Text>
      </View>
      <View style={[styles.card , styles.cardThird]}>
          <Text style ={styles.text}>Green</Text>
      </View>
      <View style={[styles.card , styles.cardThird]}>
          <Text style ={styles.text}>Green</Text>
      </View>
      <View style={[styles.card , styles.cardThird]}>
          <Text style ={styles.text}>Green</Text>
      </View>
      <View style={[styles.card , styles.cardThird]}>
          <Text style ={styles.text}>Green</Text>
      </View>
      <View style={[styles.card , styles.cardThird]}>
          <Text style ={styles.text}>Green</Text>
      </View>
      <View style={[styles.card , styles.cardThird]}>
          <Text style ={styles.text}>Green</Text>
      </View>
      <View style={[styles.card , styles.cardThird]}>
          <Text style ={styles.text}>Green</Text>
      </View>
    </ScrollView>
  </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    headingText : {
        marginTop : 60,
        paddingHorizontal : 8,
        fontSize : 20,
        fontWeight : 'bold',
    },
    card : {
        width: 150,
        height: 150,
        borderRadius : 4,
        margin: 8,
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
    },
    cardOne : {
        backgroundColor : "red",
    },
    cardSecond : {
        backgroundColor : "blue",
    },
    cardThird : {
        backgroundColor : "green",
    },
    text : {
        color : "#ffffff"
    }
})