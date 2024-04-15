import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import {Card} from 'react-native-paper';
import BackgroundImage from '../../components/backgroundImage';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <BackgroundImage source={require('../../../assets/images/background.png')}>
      <View style={styles.styledContainer}>
        <Card style={styles.styledCard}>
          <Card.Content>
            <View style={{gap: 10}}>
              <Text variant="titleLarge" style={styles.styledTitle}>
                Sign In
              </Text>

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
                // secureTextEntry
                onChangeText={password => setPassword(password)}
              />
            </View>

            <CustomButton
              title={
                <Text style={{textDecorationLine: 'underline'}}>
                  Forgot Password?
                </Text>
              }
              mode="text"
              textColor="#FA2D5E"
              onPress="Forgot Password?"
              style={{
                alignItems: 'flex-end',
                textDecorationLine: 'underline',
              }}
            />

            <CustomButton
              title="Sign In"
              mode="contained"
              onPress="Sign-In"
              style={{
                backgroundColor: '#FA2D5E',
                borderRadius: 4,
                paddingVertical: 3,
              }}
            />

            <CustomButton
              title="Don't have account?"
              mode="text"
              textColor="#333333"
              onPress="Don't have account?"
              style={{
                alignItems: 'flex-end',
              }}
            />
          </Card.Content>
        </Card>
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

  styledCard: {backgroundColor: 'white', padding: 10, borderRadius: 8 },

  styledTitle: {
    color: '#FA2D5E',
    fontFamily: 'Roboto',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default LoginScreen;
