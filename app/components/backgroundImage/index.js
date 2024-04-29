import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import BackgroundIcon from '../backgroundIcon';

const BackgroundImage = ({source, iconShow, children}) => {
  return (
    <ImageBackground source={source} style={styles.backgroundImage}>
      <View style={styles.container}>
        {iconShow === 'no' ? '' : <BackgroundIcon />}
        {children}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,

    // position: 'absolute',
    // top: 40,
    // left: 14,
  },
});

export default BackgroundImage;
