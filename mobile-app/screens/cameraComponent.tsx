import React, { useRef, useState, useEffect } from 'react';
import { View, Button, Text } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      const audioStatus = await Camera.requestMicrophonePermissionsAsync();
      setHasPermission(status === 'granted' && audioStatus.status === 'granted');
    })();
  }, []);

  const startRecording = async () => {
    if (cameraRef.current) {
      setIsRecording(true);
      try {
        const video = await cameraRef.current.recordAsync({
          maxDuration: 60, // Set a max duration for the recording if needed
        });
        console.log('Video recorded:', video);
      } catch (error) {
        console.log('Error recording video:', error);
      } finally {
        setIsRecording(false);
      }
    } else {
      console.log('Camera ref is not set');
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting permissions...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <Camera
        ref={cameraRef}
        style={{ flex: 1 }}
        type={"front"}
        useCamera2Api={true}
      />
      <Button
        title={isRecording ? 'Recording...' : 'Start Recording'}
        onPress={startRecording}
        disabled={isRecording}
      />
    </View>
  );
};

export default CameraComponent;
