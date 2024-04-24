import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Linking,
  Alert,
  View,
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import { Text } from "react-native-paper";

const QrScanner = ({handleOnSuccess, navigation}) => {
  const [reactivate, setReactivate] = useState(true);
  const [data, setData] = useState();

  const handleRedirect = () => {
    data
      ? Linking.openURL(data).catch((err) =>
          console.error("An error occured", err)
        )
      : Alert.alert("No QR data found", "Scan a QR first");
  };
  const handleInfo = () => {
    data
      ? Alert.alert("Scanned Data", data)
      : Alert.alert("No QR data found", "Scan a QR first");
  };
  const onSuccess = (e) => {
    // Linking.openURL(e.data).catch((err) =>
    //   console.error('An error occured', err)
    // );
    setReactivate(true);
    setData(e.data);
    handleOnSuccess(e);
    // navigation.navigate('register');
    // Alert.alert(
    //   "Scanned Data",
    //   e.data,
    //   [
    //     {
    //       text: "OK",
    //       onPress: () => setReactivate(true),
    //     },
    //   ],
    //   { cancelable: false }
    // );
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
    //   flashMode={RNCamera.Constants.FlashMode.torch}
      reactivate={true}
      reactivateTimeout={2000}
      // cameraTimeout={2000}
      showMarker={true}
      markerStyle={{borderColor:'red', borderRadius:8, borderWidth:4 }}

    />
  );
};

const styles = StyleSheet.create({
  marker:{
    color : 'red'
  }
});

export default QrScanner;
