import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const ImageInfo = createContext(null);
const ImageProvider = ({ children }: any) => {
  const [images, setImages] = useState<any>([]);
  return (
    <ImageInfo.Provider
      value={{ images, setImages }}
    >
      {children}
    </ImageInfo.Provider>
  );
};
export default ImageProvider;