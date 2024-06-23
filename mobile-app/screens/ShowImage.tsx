import React from "react";
import {
    Button,
    Dimensions,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
  } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
const ShowImage=({route})=>{
    console.log(route.params.uri)
    return (
       <ScrollView>
        {
            route?.params?.uri?.map((e ,index)=>{
                console.log(e.uri)
                return (
                    <Image key={index}
                    source={{ uri: e.uri }}
                    style={styles.bigImage}
                  
                  />
                )
            })
        }
       </ScrollView>
    )
}
export default ShowImage
const styles = StyleSheet.create({
    bigImage:{
        width:windowWidth / 1 ,
        height:windowHeight / 1,
        marginBottom:5
    }
  });