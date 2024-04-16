import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Card, Divider, IconButton} from 'react-native-paper';
import {Icon, MD3Colors} from 'react-native-paper';

import BackgroundImage from '../../components/backgroundImage';
import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import TextButton from '../../components/textButton';
import {ScrollView} from 'react-native-gesture-handler';

const RegistrationScreen = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <BackgroundImage source={require('../../../assets/images/background.png')}>
      <View style={styles.styledContainer}>
        {/* <ScrollView style={{flex: 1}}> */}
        <Card style={styles.styledCard}>
          <Card.Content>
            <View style={{gap: 10}}>
              <Text variant="titleLarge" style={styles.styledTitle}>
                Sign Up
              </Text>

              <TextField
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChangeText={name => setName(name)}
              />

              <TextField
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={email => setEmail(email)}
              />

              <TextField
                label="Password"
                placeholder="Enter your password"
                value={password}
                secureTextEntry
                onChangeText={password => setPassword(password)}
              />

              <TextField
                label="Confirm Password"
                placeholder="Enter your confirm password"
                value={confirmPassword}
                secureTextEntry
                onChangeText={confirmPassword =>
                  setConfirmPassword(confirmPassword)
                }
              />
            </View>

            <View style={{marginTop: 24}}>
              <CustomButton
                title="Sign Up"
                mode="contained"
                onPress={() => console.log('Sign-UP')}
              />
            </View>

            <View style={{marginVertical: 10}}>
              <Divider />
              <Text>Or sign up with</Text>
              <Divider />
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 20,
              }}>
              <CustomButton title="Google" mode="outlined" />
              <CustomButton title="Facebook" mode="outlined" />
            </View>

            <TextButton
              title="Already have account?"
              align="center"
              underline="underline"
              onPress={() => navigation.navigate('Login')}
            />
          </Card.Content>
        </Card>
        {/* </ScrollView> */}
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 5,
  },

  styledCard: {backgroundColor: 'white', padding: 10, borderRadius: 8},

  styledTitle: {
    color: '#FA2D5E',
    fontFamily: 'Roboto',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default RegistrationScreen;
