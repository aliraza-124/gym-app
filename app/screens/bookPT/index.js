import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import theme from '../../theme';

const BookPersonalTrainerScreen = () => {
  return (
    <>
      <View style={styles.styledContainer}>
        <Text style={styles.styledScreenTitle}>Book a Personal Trainer...</Text>
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

  styledScreenTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
  },
});

export default BookPersonalTrainerScreen;
