import React, { useState } from 'react';
import { Button, Image, View, StyleSheet, Pressable, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { ScrollView } from 'react-native-gesture-handler';

export default function ImagePickerExample() {
  const [images, setImages] = useState([]);
// console.log(images)
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImages(result.assets);
    }
  };

 
  const uploadImages = async () => {
    if (images.length > 0) {
      const data = new FormData();
      images.forEach((image, index) => {
        data.append('profile-files', {
          name: image.fileName || `image${index}.jpg`,
          type: image.mimeType || 'image/jpeg',
          uri: image.uri,
        });
      });

      try {
        const response = await fetch('http://192.168.132.248:3000/profile-upload-multiple', {
          method: 'POST',
          body: data,
          headers: {
            // 'Content-Type': 'multipart/form-data',
          },
        });

        console.log(response , "response")
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

  return (
  <ScrollView style={{marginTop:50}}>
      <View style={styles.container}>
      <Button title="Pick images from camera roll" onPress={pickImage} />
      <View style={styles.imageContainer}>
        {images.length > 0 && images.map((image, index) => (
          <Image source={{ uri: image.uri }} style={styles.image} key={index} />
        ))}
      </View>
      <Pressable onPress={uploadImages} style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload</Text>
      </Pressable>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    display:"flex" ,
    justifyContent:"center",
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 4,
  },
  uploadButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
