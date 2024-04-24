import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';
import BackgroundIcon from '../backgroundIcon';

const BackgroundImage = ({source, children}) => {
  return (
    !source ? <View style={styles.container}><BackgroundIcon />{children}</View>
    :
    <ImageBackground source={source} style={styles.backgroundImage}>
      <View style={styles.container}>
        <BackgroundIcon />
        {children}
      </View>
    </ImageBackground> 
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)', // You can adjust the background color opacity here
    padding: 14,
  },
});

export default BackgroundImage;
