import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FancyCard = ({name }) => {
    const websiteLink = (web) => {
        Linking.openURL(web)
    }
  return (
    <View>
      <Text style={styles.heading}>Fancy Card</Text>
      <View style={[styles.card , styles.CardFancy]}>
        <Image
        style={styles.cardImage}
            source={{
            uri : "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80"
        }}/>
        <View style={styles.cardBody}>
            <Text style={styles.cardTilte}>{name}</Text>
            <Text style={styles.cardLable}>sameer sattar Card label</Text>
            <Text style={styles.cardDesc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores libero odio maxime, rem ut, obcaecati tenetur veniam minima nostrum, ex ea a voluptatum. Provident exercitationem sapiente tempora numquam similique?</Text>
            <Text style={styles.cardFooter}>Footer</Text>
            <View style={styles.ButtonContainer}>
            <TouchableOpacity onPress={() => websiteLink("https://github.com/sameersattar123")}>
                <Text>Click Here</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => websiteLink("https://www.youtube.com/")}>
                <Text>Click Here</Text>
            </TouchableOpacity>
            </View>
        </View>

      </View>
    </View>
  )
}

export default FancyCard

const styles = StyleSheet.create({
    heading : {
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 8
    },
    card : {
        borderRadius : 8,
        width: 380,
        height: 440,
        marginHorizontal : 8,
        marginVertical : 12,
        borderColor : "black",
        backgroundColor : "red"
    },
    CardFancy : {
        backgroundColor : "white",
        elevation : 6,
        margin : 6
    },
    cardImage : {
        width: 340,
        height: 200,
    },
    cardBody : {
        flex: 1,
        flexGrow: 1
    },
    cardTilte :{
        fontSize : 30,
        paddingLeft : 8,
        color: "orange"
    },
    cardLable :{
        marginTop : 5,
        fontSize : 15,
        paddingLeft : 11,
        color: "orange"
    },
    cardDesc : {
        marginTop : 5,
        fontSize : 15,
        paddingLeft : 8,
        color: "orange"
    },
    cardFooter : {
        marginTop : 5,
        fontSize : 15,
       textAlign : "center",
        color: "orange",
        marginBottom : 5
    },
    ButtonContainer : {
        flex: 1,
        flexDirection : "row",
        justifyContent : "space-evenly",
        alignItems : 'center',
    }


})