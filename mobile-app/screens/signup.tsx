import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  Dimensions,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView } from "react-native-gesture-handler";
import { GlobalInfo } from "../context/userDetails";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });
  const navigation: any = useNavigation();
  const { userDetails, setUserDetails } = useContext(GlobalInfo);


  const handleSubmit = async () => {
    console.log("click");

    if (!userData.name) {
      alert("please add name");
      return;
    }
    if (!userData.mobile) {
      alert("please add mobile");
      return;
    }
    if (!userData.email) {
      alert("please add email");
      return;
    }
    if (!userData.password) {
      alert("please add password");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.119.248:3000/signup",
        {
          ...userData,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = await response.data;
      if (result) {
        console.log("Success:", result);
        setUserData({
          name: "",
          email: "",
          mobile: "",
          password: "",
        });
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <ScrollView style={{ marginHorizontal: 20 }}>
      <View style={{ marginTop: 50 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ paddingTop: 20 }}>
            <Ionicons name="arrow-back-outline" size={23} />
          </Text>
        </Pressable>
        <View style={{ marginBottom: 45 }}>
          <Text style={{ marginTop: 50, fontWeight: "800", fontSize: 30 }}>
            Sign up
          </Text>
          <Text
            style={{
              color: "#a5a8ab",
              fontSize: 15,
              lineHeight: 15,
              marginTop: 10,
            }}
          >
            SIgn in for next step Should you have any questions or require
            further information as you proceed, please do not hesitate to reach
            out to our support
          </Text>
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Name
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...userData, name: e})}
          value={userData.name}
          placeholder="Enter your name"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Email
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...userData, email: e.trim().toLocaleLowerCase()  })}
          value={userData.email}
          placeholder="Enter your email"
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Mobile No.
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...userData, mobile: e })}
          value={userData.mobile}
          placeholder="Enter your mobile no."
           keyboardType = 'numeric'
        />
        <Text
          style={{
            fontWeight: "600",
            fontSize: 20,
            lineHeight: 20,
            marginBottom: 10,
            color: "#666666",
          }}
        >
          Password
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setUserData({ ...userData, password: e.trim() })}
          value={userData.password}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginHorizontal: 20,
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#0D88C3",
              height: 45,
              width: windowWidth / 1.05,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "grey",
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: "#ffff", fontWeight: "800" }}>Signup</Text>
          </Pressable>
        </View>

        <View
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: windowHeight / 9,
          }}
        >
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "500" }}>
            Already have account ?{" "}
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ color: "blue", fontSize: 15, fontWeight: "500" }}>
              Signin
            </Text>
          </Pressable>
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
