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

const windowWidth = Dimensions.get("window").width;

export const MainScreen = (
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
    <ScrollView>
    <View style={{display:"flex" , justifyContent:"center" , flexDirection:"row"}}>
   <View>
   {[1, 1, 1, 1, 1, 1].map((e, i) => {
        return (
          <View
            key={i}
            style={{
              backgroundColor: "",
              alignItems: "center",
              margin: 5,
              display: "flex",
              justifyContent: "",
              flexDirection: "row",
              borderWidth:1,
              borderRadius:5,
              padding:5,
              borderColor:"grey",
              width: windowWidth /1.05
            }}
            //    style={styles.user}
          >
            <Image
              style={{ width: 50, height: 50, borderRadius: 50 }}
              resizeMode="cover"
              source={{
                uri: "https://reactnative.dev/img/tiny_logo.png",
              }}
            />
            <Text style={{paddingHorizontal:10, fontWeight:'bold'}}>main screen</Text>
          </View>
        );
      })}
   </View>
    </View>
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
