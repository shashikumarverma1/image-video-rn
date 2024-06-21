import React from "react";
import { View, Text , StyleSheet, Dimensions } from "react-native"
import Ionicons from "@expo/vector-icons/Ionicons";
const windowWidth = Dimensions.get("window").width;

export const JobDetailCard=({tittle ,title2, data})=>{
    return (
     <View style={{display:"flex" , flexDirection:"row" , justifyContent:'center'}}>
           <View 
        // style={{marginHorizontal:20}}
        style={{
            backgroundColor: "#fff",
            borderRadius: 8,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 1.84,
            elevation: 5, // This is for Android
            padding: 15,
            margin: 5,
            width: windowWidth / 1,
            paddingLeft:30
            // maxWidth: windowWidth / 1.07,
          }}
        >
        <Text style={styles.tittle}>{tittle}</Text>

         {
          title2 && <Text style={styles.tittle2}>{title2.slice(0,290)}...</Text>
         }
      {
        data.map((e , index)=>{
         
            return (
                <View style={{display:"flex" , flexDirection:"row",marginBottom:5}} key={index}>
                <View>
                <Text style={{marginTop:5}}><Ionicons name={`${e.icon}`} size={20} color="grey" /></Text>
                </View>
                <View style={{paddingLeft:10}}>
               {e.heading && <Text style={{color:"grey" , fontSize:15, fontWeight:"400", paddingVertical:3}}>
                    {e.heading}</Text>}
               { e.subheading && <Text style={{fontSize:14}}>{e.subheading}</Text>}
               
                </View>
                </View>
            )
        })
      }
      </View>
     </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
    label: {
      marginBottom: 5,
    },
    input: {
      width: "100%",
      height: 40,
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 20,
    },
    tittle:{fontSize:15 , fontWeight:"500" ,marginBottom:5, marginTop:5},
    tittle2:{fontSize:15 , fontWeight:"400" ,marginBottom:5, marginTop:5 ,textAlign:"justify"}
  });