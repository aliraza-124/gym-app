import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

import theme from './../../theme/index';
import {Text} from 'react-native-paper';
import IconButton from '../../components/iconButton';
import SectionWrapper from '../../components/sectionWrapper';
import {ScrollView} from 'react-native-gesture-handler';
import UpcomingEventsCard from '../../components/cards/upcomingEventsCard';
import BookPTCard from '../../components/cards/bookPTCard';

const UserDashboardScreen = ({navigation}) => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.styledContainer}>
          <View>
            <Text style={styles.styledScreenTitle}>Ready to workout?</Text>
          </View>

          <View>
            <IconButton
              icon="qrcode"
              mode="contained"
              title="Scan QR"
              onPress={() => navigation.navigate('RegistrationQRCode')}
            />
          </View>

          <View>
            <SectionWrapper
              title="Upcoming Events"
              description="Gather up, we have some
            exciting events planned!!">
              <View style={{gap: 20}}>
                <UpcomingEventsCard
                  title="Monthly coffee catch up"
                  date="01/02/2024"
                  time="10.30 PM"
                  onPress={() => console.log('View Events')}
                />

                <UpcomingEventsCard
                  title="Going for a run"
                  date="05/02/2024"
                  time="10.30 PM"
                  onPress={() => console.log('View Events')}
                />

                <UpcomingEventsCard
                  title="Bi monthly dinner"
                  date="01/02/2024"
                  time="10.30 PM"
                  onPress={() => console.log('View Events')}
                />
              </View>
            </SectionWrapper>
          </View>

          {/* <View>
            <SectionWrapper>
              <TextField />
              <TextField />
            </SectionWrapper>
          </View> */}

          <View>
            <SectionWrapper title="Book A PT">
              <View style={{gap: 20}}>
                <BookPTCard />
                <BookPTCard />
                <BookPTCard />
              </View>
            </SectionWrapper>
          </View>

          <View>
            <SectionWrapper title="Feel free to go through our workout library!">
              <View style={{gap: 20}}>
                <Image
                  source={require('../../../assets/images/workout-track1.png')}
                  style={{width: 'auto'}}
                />

                <Image
                  source={require('../../../assets/images/workout-track2.png')}
                  style={{width: 'auto'}}
                />

                <Image
                  source={require('../../../assets/images/workout-track3.png')}
                  style={{width: 'auto'}}
                />
              </View>
            </SectionWrapper>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: theme.colors.white,
    gap: 20,
  },

  styledScreenTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'left',
  },
});

export default UserDashboardScreen;
