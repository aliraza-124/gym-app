import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppQRCodeScanner from '../../../components/qrCodeScanner';
import theme from '../../../theme';
import BackgroundIcon from './../../../components/backgroundIcon/index';

const RegistrationQRCode = ({navigation}) => {
  return (
    <>
      <View style={styles.styledContainer}>
        <BackgroundIcon />
        <AppQRCodeScanner title="Scan QR code to sign up on mobile" navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.background,
  },
});

export default RegistrationQRCode;
