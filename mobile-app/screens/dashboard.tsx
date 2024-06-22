import { Camera, CameraView, useCameraPermissions } from "expo-camera";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
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
import Ionicons from "@expo/vector-icons/Ionicons";
import ProfileForm from "./upload";
import ImagePickerExample from "./upload";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
const windowHeight = Dimensions.get("window").height;
export const Dashboard = () => {
  const [facing, setFacing] = useState("front");
  const [isRecording, setIsRecording] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [images, setImages] = useState([]);
  const [bigImage , setBigImage]=useState(null)
const navigation=useNavigation()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
      }

      const audioPermission = await Camera.requestMicrophonePermissionsAsync();
      if (audioPermission.status !== "granted") {
        alert("Sorry, we need audio recording permissions to make this work!");
      }
    })();
  }, []);
  const cameraRef = useRef(null);
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const uploadImages = async () => {
    if (images.length > 0) {
      const data = new FormData();
      images.forEach((image, index) => {
        console.log(image.uri);
        data.append("profile-files", {
          name: image.fileName || `image${Date.now()}.jpg`,
          type: image.mimeType || "image/jpeg",
          uri: image.uri,
        });
      });

      try {
        const response = await fetch(
          "http://192.168.132.248:3000/profile-upload-multiple",
          {
            method: "POST",
            body: data,
            headers: {
              // 'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log(response, "response");
        if (response) {
          setImages([]);
          alert("images uploaded successfully");
        }
        if (!response.ok) {
          //   throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        // console.log('Upload success', result);
      } catch (error) {
        // console.log('Upload error', error);
      }
    }
  };

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync();
        console.log("Photo taken:", photo);
        setImages([...images, photo]);
      } catch (error) {
        console.log("Error taking picture:", error);
      }
    } else {
      console.log("Camera ref is not set");
    }
  };
  const startRecording = async () => {
    if (cameraRef.current) {
      setIsRecording(true);
      try {
        const video = await cameraRef.current.recordAsync({
          maxDuration: 60, // Set a max duration for the recording if needed
        });
        console.log("Video recorded:", video);
      } catch (error) {
        console.log("Error recording video:", error);
      } finally {
        setIsRecording(false);
      }
    } else {
      console.log("Camera ref is not set");
    }
  };

  const stopRecording = () => {
    if (cameraRef.current) {
      cameraRef.current.stopRecording();
    }
  };
  console.log(images.length, "images");
  return (
    <ScrollView>
      <View style={styles.container}>
        <CameraView
          style={styles.camera}
          facing={facing}
          FocusMode="on"
          ref={cameraRef}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={toggleCameraFacing}
            >
              <Text style={styles.text}>
                <Ionicons name="shuffle-outline" size={49} color="#FFFFFF" />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>
                <Ionicons name="ellipse" size={49} color="#FFFFFF" />
              </Text>
            </TouchableOpacity>
            {isRecording ? (
              <TouchableOpacity style={styles.button} onPress={stopRecording}>
                <Text style={styles.text}>
                  <Ionicons name="close-circle" size={49} color="red" />
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={startRecording}>
                <Text style={styles.text}>
                  <Ionicons name="ellipse" size={49} color="red" />
                </Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity style={styles.button} onPress={uploadImages}>
              <Text style={styles.text}>
                <Ionicons name="arrow-up-circle" size={49} color="grey" />
              </Text>
            </TouchableOpacity>
          </View>
          {images?.length > 0 && (
            <Pressable style={styles.imageContainer}>
              {images?.length > 0 &&
                images?.map((image, index) => (
                  <Pressable onPress={()=>navigation.navigate("ShowImage" , {uri:images})}>
                    <Image
                      source={{ uri: image.uri }}
                      style={styles.image}
                      key={index}
                    />
                  </Pressable>
                ))}
            </Pressable>
          )}
        </CameraView>
      </View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    backgroundColor: "transparent",
    margin: 64,
    paddingTop: windowHeight / 1.32,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  // container: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 0.1,
    marginTop: -55,
  },
  image: {
    width: 35,
    height: 50,
    margin: 1,
    paddingBottom: 5,
  },
  uploadButton: {
    // backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: -200,
  },
  uploadButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
