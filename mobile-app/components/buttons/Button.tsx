import { View, Text, Pressable, Dimensions } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
const windowWidth = Dimensions.get("window").width;
export const Button = () => {
  return (
  <ScrollView>
      <View style={{display:"flex" , justifyContent:"center" , flexDirection:'row' , marginBottom:5}}>
      <Pressable
        style={{
          // backgroundColor: "#0D88C3",
          height: 45,
          width: windowWidth / 1.05,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          borderWidth:1 , 
          borderColor:"grey"
        }}
        // onPress={() => signUpHandle()}
      >
        <Text style={{ color: "green", fontWeight: "800" }}>Signup</Text>
      </Pressable>
      
    </View>
    <View style={{display:"flex" , justifyContent:"center" , flexDirection:'row' , marginBottom:5}}>
      <Pressable
        style={{
          backgroundColor: "#0D88C3",
          height: 45,
          width: windowWidth / 1.05,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 5,
          borderWidth:1 , 
          borderColor:"grey"
        }}
        // onPress={() => signUpHandle()}
      >
        <Text style={{ color: "#ffff", fontWeight: "800" }}>Signup</Text>
      </Pressable>
      
    </View>
  </ScrollView>
  );
};
