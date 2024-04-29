import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../../button';
import theme from '../../../theme';

const UpcomingEventsCard = ({title, date, time, onPress}) => {
  return (
    <View style={styles.styledContainer}>
      <Text style={styles.styledTitle}>{title}</Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.styledDate}>{date}</Text>
          <Text style={styles.styledTime}>{time}</Text>
        </View>

        <View>
          <CustomButton
            title="View Events"
            mode="contained"
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 10,
    borderColor: theme.colors.border,
    borderWidth: 1,
  },

  styledTitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    color: theme.colors.text,
    marginBottom: 20,
  },

  styledDate: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    color: theme.colors.primary,
  },

  styledTime: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
});

export default UpcomingEventsCard;
