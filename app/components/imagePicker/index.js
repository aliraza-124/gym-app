import React, { useState } from 'react';
import { Alert, PermissionsAndroid, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { launchImageLibrary } from "react-native-image-picker";
import { requestGalleryPermission } from '../../utils/permission'; 

export default function ImagePicker({ label, icon, onPress }) {
  const [imgUrl, setImgUrl] = useState('');

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
      }
    } catch (error) {
      console.log("Error reading the image");
    }
  };

  return (
    <View>
      <View style={styles.iconBox}>
        {!imgUrl && (
          <Avatar.Icon icon={'account'} size={120} color='#FA2D5E' style={{ backgroundColor: '#EEF1F2' }} />
        )}
        {imgUrl && (
          <Avatar.Image size={120} source={{ uri: imgUrl }} />
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
