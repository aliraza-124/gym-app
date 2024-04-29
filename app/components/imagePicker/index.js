import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar, useTheme } from 'react-native-paper';
import { launchImageLibrary } from "react-native-image-picker";
import { requestGalleryPermission } from '../../utils/permission'; 
import { useUser } from '../../context/userContext';

export default function ImagePicker({media, label, icon, onChangeImage }) {
  // const URL = media ? `https://api.dev.inzer.com.au/media-storage?key=${media}` : '';
  // const [imgUrl, setImgUrl] = useState(URL);
  const [imgUrl, setImgUrl] = useState(media );
  
  const { user } = useUser();
  const theme = useTheme();
 


  // const handlePress = async () => {
  //   const permissionGranted = await requestGalleryPermission();
  //   if (permissionGranted) {
  //     handleGallery();
  //   } else {
  //     console.log('Permission denied');
  //     Alert.alert( 'Permission denied')
  //     // permission denial 
  //   }
  // };
  const handlePress = async () => {
    requestCameraPermission();
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'image gallery Permission',
          message:
            ' App needs access to your image gallery ' ,
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        handleGallery();
        console.log('You can use the image gallery');
      } else {
        console.log('image gallery permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  const handleGallery = async () => {
    try {
      const result = await launchImageLibrary();
      console.log(result.assets[0].uri);
      if (!result.didCancel) {
        setImgUrl(result.assets[0].uri);
        onChangeImage(result.assets[0].uri);
        // uploadImage(result.assets[0].uri);
      }
    } catch (error) {
      console.log("Error reading the image");
    }
  };

  // const uploadImage = async (imageData) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('file', {
  //       uri: imageData.uri,
  //       type: imageData.type,
  //       name: 'image.jpg', // You may need to adjust the file name
  //     });

  //     const response = await fetchMedia(formData); // Adjust this according to your API
  //     const { data } = await response.json();

  //     // onChangeImage(data.url); // Assuming your API returns the uploaded image URL

  //     // Handle success response from server
  //   } catch (error) {
  //     console.error('Error uploading image:', error);
  //     Alert.alert('Error', 'Failed to upload image');
  //   }
  // };
  // const fetchMedia = async (formData) => {
  //   try {
  //     const response = await fetch('https://api.dev.inzer.com.au/media-storage/upload', {
  //       method: 'POST',
  //       body: formData,
  //     });
  //     if (!response.ok) {
  //       throw new Error('Failed to upload media');
  //     }
  //     return response.json();
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return (
      <View>
        <View style={styles.iconBox}>
          {!media && (
            <Avatar.Icon icon={'account'} size={120} color={theme.colors.primary} style={{ backgroundColor: theme.colors.background }} />
          )}
          {imgUrl && (
            <Avatar.Image size={120} source={{ uri : imgUrl }}  />
            // <Avatar.Image size={120} source={{ uri: `data:image/jpeg;base64,${mediaData}` }}  />
          )}

          <View style={styles.pickerIcon}>
            <TouchableOpacity onPress={handleGallery} style={styles.item}>
              <Avatar.Icon style={{}} size={36} icon={'pen'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  item: {
    // justifyContent:'center',
    alignItems: 'center',
  },
  container: {
    // alignItems: 'center',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    // alignItems:'center',
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerIcon: {
    padding: 2,
    backgroundColor: '#fff',
    borderRadius: 100,
    top: -40,
    left: 40
  }
});

