import React, { useContext } from "react";
import {
  Dimensions, 
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { ImageInfo } from "../context/imageProvider";
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;
import Ionicons from "@expo/vector-icons/Ionicons";
const ShowImage = () => {
  const { images, setImages } = useContext(ImageInfo);
  return (
    <ScrollView style={{  marginTop:windowHeight / 23}}>
      {images?.map((e, index) => {
        console.log(e.uri);
        return (
          <View>
            <TouchableOpacity
              style={{
                position: "relative",
                top: 50,
                marginBottom: -40,
                zIndex: 999,
              }}
              onPress={() => {
                let res = images.filter((ele) => ele != e);
                console.log(res.length);
                setImages(res);
              }}
            >
              <Text style={{ textAlign: "right", paddingRight: 10 }}>
                <Ionicons name="close" size={39} color="#FFFFFF" />
              </Text>
            </TouchableOpacity>

            <Image
              key={index}
              source={{ uri: e.uri }}
              style={styles.bigImage}
            />
          </View>
        );
      })}
      {images?.length == 0 && (
        <Text
          style={{
            textAlign: "center",
            paddingTop: windowHeight / 2,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          No Data....{" "} Go back...
        </Text>
      )}
    </ScrollView>
  );
};
export default ShowImage;
const styles = StyleSheet.create({
  bigImage: {
    width: windowWidth / 1,
    height: windowHeight / 1.07,
    marginBottom: 5,
    borderRadius:5
  
  },
  button: {
    flex: 0.5,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
