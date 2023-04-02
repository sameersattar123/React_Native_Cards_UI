import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCard = () => {
  return (
    <>
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <View style={[styles.card , styles.cardOne]}>
            <Text style ={styles.text}>Red</Text>
        </View>
        <View style={[styles.card , styles.cardSecond]}>
            <Text style ={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card , styles.cardThird]}>
            <Text style ={styles.text}>Green</Text>
        </View>
      </View>
    </View>

    </>
  )
}

export default FlatCard

const styles = StyleSheet.create({
    headingText : {
        marginTop : 60,
        paddingHorizontal : 8,
        fontSize : 20,
        fontWeight : 'bold',
    },
    container : {
        display: "flex",
        flexDirection : "row",
        padding: 5
    },
    card : {
        width: 100,
        height: 100,
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