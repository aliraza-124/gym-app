import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';
import BackgroundImage from '../../components/backgroundImage';
import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import ForgotPasswordModal from '../../components/model/ForgotPasswordModal';
import AppButton from '../../components/customButton';

import * as Yup from 'yup';
import { Formik } from 'formik';
import AppTextInput from '../../components/textInput';
import LoginForm from './loginForm';


const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginScreen = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);

  const handleForgotPassword = () => {
    setStep(1); // Start from step 1
    setVisible(true); // Set showModal state to true to display the modal
  };
  
  const handleNext = () => {
    // Proceed to the next step
    (step == 5 ? hideModal() : setStep(step + 1) )
    
  
  };

  const hideModal = () => {
    setVisible(false);
    setStep(0); // Reset step when closing the modal
  };

  const handleLogin = (values) => {
    console.log(values)
    navigation.navigate('register')
  }

  return (
    <BackgroundImage source={require("../../../assets/images/background.png")}>
      <View style={styles.styledContainer}>
        <Card style={styles.styledCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.styledTitle}>
              Sign In
            </Text>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleLogin(values)}
            >
              {({ handleSubmit, handleChange, errors }) => (
                <>
                  <View style={{ gap: 2, marginTop:20 }}>
                   
                    <AppTextInput
                      label={"Email"}
                      type={"text"}
                      onChangeText={handleChange("email")}
                      placeholder={"Enter your email"}
                      keyboardType={"email-address"}
                      errors={errors.email}
                    />
                    <AppTextInput
                      label={"Password"}
                      type={"text"}
                      onChangeText={handleChange("password")}
                      placeholder={"Enter your password"}
                      keyboardType={"default"}
                      errors={errors.password}
                      secureTextEntry={true}
                    />
                    
                  </View>

                  <CustomButton
                    title="Forgot Password?"
                    mode="text"
                    onPress={handleForgotPassword}
                    style={{ color:"#FA2D5E", alignItems: 'flex-end', textDecorationLine: 'underline' }}
                  />

                  
                  <AppButton 
                  
                    title="Sign In"
                    variant="contained"
                    onPress={handleSubmit}
                  />

                  <CustomButton
                    title="Don't have account?"
                    mode="text"
                    onPress={()=>navigation.navigate('qr')}
                    style={{  alignItems: 'flex-end' }}
                  />
                </>

          )}
          </Formik>

          </Card.Content>
        </Card>
      </View>

      {/* <LoginForm handleLogin={handleLogin} handleForgotPassword={handleForgotPassword} /> */}

      <ForgotPasswordModal 
        iconUrl={require("../../../assets/images/icon.png")}
        visible={visible}
        hideModal={hideModal}
        onPress={handleForgotPassword}

        step={step}
        handleNext={handleNext}
      >

      </ForgotPasswordModal>
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
