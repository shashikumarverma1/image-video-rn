import React from "react";
import { useState } from "react";
import {
  TextInput,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
const windowWidth = Dimensions.get("window").width;

export const HorizontalCard = (
  {
    //   bgcolor,
    //   color,
    //   text,
    //   borderRadius,
    //   bordercolor,
    //   justify,
    //   fn,
    //   width,
    //   height,
    //   textsize
  }
) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {[1, 1, 1, 1, 1, 1].map((e, i) => {
         return (
           <View
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
           width:windowWidth / 1.1
         }}
       >
       { true &&  <View
           style={{
             display: "flex",
             flexDirection: "row",
             backgroundColor: "#fcede6",
             padding: 5,
             borderRadius: 5,
             marginBottom:5
           }}
         >
           <Ionicons name="flame" size={20} color="red" />
           <Text
             style={{
               fontWeight: "500",
               fontSize: 15,
               color: "red",
               paddingLeft: 3,
             }}
           >
             Urgently hire
           </Text>
         </View>}
         <View
           style={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "space-between",
           }}
         >
           <View
             style={{
               display: "flex",
               flexDirection: "row",
               alignItems: "center",
             }}
           >
             <Image
               style={{ width: 20, height: 20 }}
               source={{
                 uri: "https://reactnative.dev/img/tiny_logo.png",
               }}
             />
             <View>
               <Text
                 style={{
                   fontWeight: "500",
                   fontSize: 20,
                   color: "grey",
                   paddingLeft: 10,
                 }}
               >
                 Softwere Engineer
               </Text>
               <Text
                 style={{
                   fontWeight: "400",
                   fontSize: 15,
                   color: "grey",
                   paddingLeft: 10,
                   marginTop: -5,
                 }}
               >
                 apple
               </Text>
             </View>
           </View>
 
           <View>
           { true ?   <Text
              style={{
                fontWeight: "400",
                fontSize: 15,
                color: "grey",
                paddingLeft: 10,
                backgroundColor:"#D3D3D3",
                padding:3, borderRadius:5
              }}
            >
              viewed
            </Text> :     <Ionicons name="chevron-forward-outline" size={25} color="green" />}
           </View>
         </View>
         <View
           style={{
             display: "flex",
             flexDirection: "row",
             alignItems: "center",
             marginTop: 7,
           }}
         >
           <Text>
             {" "}
             <Ionicons name="locate" size={20} color="grey" />
           </Text>
           <Text
             style={{
               fontWeight: "400",
               fontSize: 15,
               color: "grey",
               paddingLeft: 10,
             }}
           >
             Lucknow
           </Text>
         </View>
        { !true ? <View
           style={{
             display: "flex",
             flexDirection: "row",
             alignItems: "center",
           }}
         >
           <Text>
             {" "}
             <Ionicons name="eye-off" size={20} color="grey" />
           </Text>
           <Text
             style={{
               fontWeight: "400",
               fontSize: 15,
               color: "grey",
               paddingLeft: 10,
             }}
           >
             Not Disclosed
           </Text>
         </View> : <View
           style={{
             display: "flex",
             flexDirection: "row",
             alignItems: "center",
           }}
         >
           <Text>
             {" "}
            {  !true ? <Ionicons name="eye-off" size={20} color="grey" /> :  <Ionicons name="eye" size={20} color="grey" />}
           </Text>
           <Text
             style={{
               fontWeight: "400",
               fontSize: 15,
               color: "grey",
               paddingLeft: 10,
             }}
           >
            30000-50000
           </Text>
         </View>}
 
         <View
           style={{
             display: "flex",
             flexDirection: "row",
             justifyContent: "space-between",
             paddingTop: 5,
           }}
         >
           <View
             style={{
               display: "flex",
               flexDirection: "row",
               backgroundColor: "#ffe1d4",
               padding: 3,
               borderRadius: 5,
               margin: 3,
             }}
           >
             <Ionicons name="locate" size={20} color="grey" />
             <Text
               style={{
                 fontWeight: "400",
                 fontSize: 15,
                 color: "grey",
                 paddingLeft: 2,
                 paddingRight: 10,
               }}
             >
               work from office
             </Text>
           </View>
           <View
             style={{
               display: "flex",
               flexDirection: "row",
               backgroundColor: "#ffe1d4",
               padding: 3,
               borderRadius: 5,
               margin: 3,
             }}
           >
             <Ionicons name="logo-facebook" size={20} color="grey" />
             <Text
               style={{
                 fontWeight: "400",
                 fontSize: 15,
                 color: "grey",
                 paddingLeft: 2,
                 paddingRight: 10,
               }}
             >
               Full time
             </Text>
           </View>
           <View
             style={{
               display: "flex",
               flexDirection: "row",
               backgroundColor: "#ffe1d4",
               padding: 3,
               borderRadius: 5,
               margin: 3,
             }}
           >
             <Ionicons name="locate" size={20} color="grey" />
             <Text
               style={{
                 fontWeight: "400",
                 fontSize: 15,
                 color: "grey",
                 paddingLeft: 2,
               }}
             >
               Min 1 year ex.
             </Text>
           </View>
         </View>
         {false && (
           <View
             style={{
               display: "flex",
               flexDirection: "row",
               backgroundColor: "#fcede6",
               padding: 5,
               borderRadius: 5,
             }}
           >
             <Text
               style={{
                 fontWeight: "500",
                 fontSize: 15,
                 color: "red",
                 paddingLeft: 3,
               }}
             >
               Interview line full
             </Text>
           </View>
         )}
       </View>
         );
       })}
    </ScrollView>
  );
};
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
});
