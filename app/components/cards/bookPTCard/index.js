import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import theme from './../../../theme/index';
import {Avatar} from 'react-native-paper';
import CustomButton from '../../button';
import {Rating} from 'react-native-ratings';

const BookPTCard = () => {
  return (
    <View style={styles.styledContainer}>
      <View
        style={{
          backgroundColor: theme.colors.lightPrimary,
          padding: 20,
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Avatar.Image
              source={require('../../../../assets/images/ptProfile.png')}
              size={100}
            />
          </View>
          <View style={{alignItems: 'center', marginLeft: 10}}>
            <Text style={styles.styledTitleQualificaiton}>Adam Smith</Text>

            <View style={{borderRadius: 10}}>
              <Rating
                imageSize={14}
                ratingBackgroundColor={theme.colors.primary}
              />
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.white,
          padding: 20,
          paddingTop: 0,
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 30,
          }}>
          <View>
            <Text style={styles.styledTitleQualificaiton}>Qualification</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 6}}>
            <CustomButton title="Cart 3" mode="outlined" borderRadius />
            <CustomButton title="Cart 4" mode="outlined" borderRadius />
          </View>
        </View>

        <View>
          <CustomButton title="View Details" mode="outlined" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  styledContainer: {},

  styledTitleQualificaiton: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'left',
    color: theme.colors.text,
  },
});

export default BookPTCard;
