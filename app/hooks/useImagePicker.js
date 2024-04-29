import React, {useState} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';

export const useImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState();

  const openLibrary = async () => {
    const LibraryResult = await launchImageLibrary({mediaType: 'photo'});
    if (!LibraryResult.didCancel && !LibraryResult.error) {
      setSelectedImage(LibraryResult.assets[0].uri);
    }
  };

  return {
    selectedImage,
    openLibrary,
  };
};
