import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import React from 'react';
import {Avatar, useTheme} from 'react-native-paper';
import BackgroundIcon from '../backgroundIcon';

const BackgroundImage = ({source, icon, children}) => {
  const theme = useTheme();
  return (
    // !source ? <View style={styles.container}><BackgroundIcon />{children}</View>
    !source ? 
    // <View style={styles.container}>
       <View style={styles.subContainer}> 
        {children}
      </View>
    // </View>
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
    // backgroundColor: 'rgba(0,0,0,0.5)', 
    paddingHorizontal: 21,
  },
  subContainer: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)', 
    backgroundColor:'#fff',
    paddingHorizontal: 21,
    paddingBottom: 40,
    // paddingTop: 0,
  },
});

export default BackgroundImage;
