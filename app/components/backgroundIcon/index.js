import {StyleSheet} from 'react-native';
import React from 'react';
import {Avatar} from 'react-native-paper';

const BackgroundIcon = () => {
  return (
    <Avatar.Image
      size={70}
      source={require('../../../assets/images/logo.png')}
      style={styles.avatar}
    />
  );
};

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 40,
    left: 14,
  },
});

export default BackgroundIcon;
