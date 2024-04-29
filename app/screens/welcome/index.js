import {StyleSheet, View} from 'react-native';
import React from 'react';
import BackgroundImage from '../../components/backgroundImage';
import {Checkbox, Text} from 'react-native-paper';
import CustomButton from '../../components/button';
import theme from '../../theme';
import BackgroundIcon from '../../components/backgroundIcon';
import CustomCheckbox from '../../components/checkbox';

const WelcomeScreen = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <BackgroundImage
        source={require('../../../assets/images/welcome-background.png')}
        iconShow="no">
        <View style={{}}>
          <BackgroundIcon />
        </View>

        <View style={styles.styledContainer}>
          {/* <View style={{position: 'relative', alignItems: 'flex-end'}}>
            <BackgroundIcon />
          </View> */}

          <Text style={styles.styledTitle}>Quote of the day</Text>
          <Text style={styles.styledQuote}>
            “ What seems impossible today will one day become your warmup ”
          </Text>

          <View style={styles.styledCheckbox}>
            <CustomCheckbox
              label="Don’t show this again"
              status={checked ? 'checked' : 'unchecked'}
              color={theme.colors.white}
              uncheckedColor={theme.colors.white}
              onPress={() => {
                setChecked(!checked);
              }}
              labelStyle={{color: theme.colors.white}}
            />
          </View>

          <CustomButton
            title="Lets go!"
            mode="outlined"
            bgColor={theme.colors.white}
            onPress={() => navigation.navigate('CompleteProfile')}
          />
        </View>
      </BackgroundImage>
    </>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 80,
  },

  styledTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: '600',
    color: theme.colors.white,
  },

  styledQuote: {
    fontFamily: 'Roboto',
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'center',
    color: theme.colors.white,
    paddingTop: 50,
  },

  styledCheckbox: {
    marginVertical: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: theme.colors.white,
  },
});

export default WelcomeScreen;
