import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import BackgroundImage from '../../components/backgroundImage';
import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import ForgotPasswordModal from '../../components/model/ForgotPasswordModal';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(0);

  const handleForgotPassword = () => {
    setStep(1); // Start from step 1
    setShowModal(true); // Set showModal state to true to display the modal
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
    setStep(0); // Reset step when closing the modal
  };

  return (
    <BackgroundImage source={require("../../../assets/images/background.png")}>
      <View style={styles.styledContainer}>
        <Card style={styles.styledCard}>
          <Card.Content>
            <View style={{ gap: 10 }}>
              <Text variant="titleLarge" style={styles.styledTitle}>
                Sign In
              </Text>

              <TextField
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChangeText={(email) => setEmail(email)}
              />

              <TextField
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <CustomButton
              title="Forgot Password?"
              mode="text"
              textColor="#FA2D5E"
              onPress={handleForgotPassword}
              style={{ alignItems: 'flex-end', textDecorationLine: 'underline' }}
            />

            <CustomButton
              title="Sign In"
              mode="contained"
              onPress="Sign-In"
              style={{ backgroundColor: '#FA2D5E', borderRadius: 4, paddingVertical: 3 }}
            />

            <CustomButton
              title="Don't have account?"
              mode="text"
              textColor="#333333"
              onPress="Don't have account?"
              style={{ alignItems: 'flex-end' }}
            />
            <Button title="Show Modaaaal" onPress={handleForgotPassword} />

          </Card.Content>
        </Card>
      </View>

      <ForgotPasswordModal step={step} onClose={handleCloseModal} showModal={showModal} />
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
  styledCard: { backgroundColor: 'white', padding: 10, borderRadius: 8 },
  styledTitle: {
    color: '#FA2D5E',
    fontFamily: 'Roboto',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default LoginScreen;
