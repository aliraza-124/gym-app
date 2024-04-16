import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';

const ModalTitle = ({title}) => {
  return (
    <View>
      <Text style={styles.styledTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  styledTitle: {
    color: '#333333',
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 20,
    textAlign: 'left',
  },
});

export default ModalTitle;
