import { PermissionsAndroid, Platform } from 'react-native';

export const requestGalleryPermission = async () => {
  if (Platform.OS === 'android') {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Required',
          message: 'This app needs permission to access your image gallery.',
        }
      );
      {console.log(granted)}
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Gallery permission granted');
        return true; // Return true if permission is granted
      } else {
        console.log('Gallery permission denied');
        return false; // Return false if permission is denied
      }
    } catch (err) {
      console.warn(err);
      return false; // Return false if an error occurs
    }
  } else {
    // For platforms other than Android, return true (permission not required)
    return true;
  }
};
