import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Icon} from 'react-native-paper';
import QRCodeScanner from 'react-native-qrcode-scanner';

import theme from '../../theme';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useScanContext} from '../../contexts/ScanContext';

const AppQRCodeScanner = ({title, navigation}) => {
  const {scannedData, updateScannedData} = useScanContext();

  const onSuccess = e => {
    const scannedData = e.data;
    if (scannedData.includes('/signup?branchId=')) {
      const id = scannedData.split('=')[1];
      updateScannedData(id);
      navigation.navigate('Registration');
    } else {
      Alert.alert('Wrong QR Code scanned', 'Please scan a QR Code again.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.upperContent}>
          <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Icon source="arrow-left" color={theme.colors.primary} size={32} />
          </TouchableWithoutFeedback>
          <Text style={styles.upperText}>{title}</Text>
        </View>
        <Text style={styles.upperTextTwo}>Scan QR Code Here</Text>
      </View>

      <View style={styles.qrScannerContainer}>
        <QRCodeScanner
          onRead={({data}) => onSuccess({data})}
          reactivate={true}
          reactivateTimeout={2000}
          showMarker={true}
          markerStyle={styles.qrMarker}
        />
      </View>
    </View>
  );
};

const {height} = Dimensions.get('window');
const QR_CODE_SIZE = height * 0.7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  upperContent: {flexDirection: 'row', alignItems: 'center', marginTop: 140},

  upperText: {
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    marginLeft: 14,
    textAlign: 'center',
  },

  upperTextTwo: {
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: '400',
    textAlign: 'center',
    paddingTop: 10,
  },

  qrScannerContainer: {
    height: QR_CODE_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  qrMarker: {
    borderColor: theme.colors.primary,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    width: '45%',
  },
});

export default AppQRCodeScanner;
