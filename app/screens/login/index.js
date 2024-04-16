import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-paper';

import BackgroundImage from '../../components/backgroundImage';
import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import PaperModal from '../../components/paperModal';
import TextButton from '../../components/textButton';
import OTPTextInput from '../../components/otpTextInput';
import theme from '../../theme';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [forgotPasswordModalVisible, setForgotPasswordModalVisible] =
    useState(false);
  const [checkEmailModalVisible, setCheckEmailModalVisible] = useState(false);
  const [OTPModalVisible, setOTPModalVisible] = useState(false);
  const [changePasswordModalVisible, setChangePasswordModalVisible] =
    useState(false);
  const [passwordChangedModalVisible, setpasswordChangedModalVisible] =
    useState(false);

  const handleOpenModal = () => setForgotPasswordModalVisible(true);

  const handleForgotToEmail = () => {
    setForgotPasswordModalVisible(false);
    setCheckEmailModalVisible(true);
  };

  const handleEmailToOTP = () => {
    setCheckEmailModalVisible(false);
    setOTPModalVisible(true);
  };

  const handleOTPToChangePassword = () => {
    setOTPModalVisible(false);
    setChangePasswordModalVisible(true);
  };

  const handleChangeToChanged = () => {
    setChangePasswordModalVisible(false);
    setpasswordChangedModalVisible(true);
  };

  const handleCloseModal = () => {
    setForgotPasswordModalVisible(false);
    setCheckEmailModalVisible(false);
    setOTPModalVisible(false);
    setChangePasswordModalVisible(false);
    setpasswordChangedModalVisible(false);
  };

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
                secureTextEntry
                onChangeText={password => setPassword(password)}
              />
            </View>

            <TextButton
              title="Forgot Password?"
              onPress={handleOpenModal}
            />

            <PaperModal
              visible={forgotPasswordModalVisible}
              nextModal={handleForgotToEmail}
              hideModal={handleCloseModal}
              title="Forgot Password"
              iocnUrl={require('../../../assets/icons/forgotPassword.png')}
              description="Don’t Worry! It happens. Please add email associated with your
              account."
              btnText1="Next"
              btnText2="Back">
              <TextField
                label="Email"
                placeholder="abc@gmail.com"
                value={email}
                onChangeText={email => setEmail(email)}
              />
            </PaperModal>

            <PaperModal
              visible={checkEmailModalVisible}
              nextModal={handleEmailToOTP}
              hideModal={handleCloseModal}
              title="Verify Email"
              iocnUrl={require('../../../assets/icons/verifyEmail.png')}
              description="You are doing good!. Please check the email you have entered. We have sent an OTP code on it."
              btnText1="Verify"
              btnText2="Cancel"
            />

            <PaperModal
              visible={OTPModalVisible}
              nextModal={handleOTPToChangePassword}
              hideModal={handleCloseModal}
              title="Enter OTP"
              iocnUrl={require('../../../assets/icons/OTP.png')}
              description="Enter OTP code send to your email."
              btnText1="Submit"
              btnText2="Cancel"
            >
              {/* <OTPTextInput /> */}
            </PaperModal>

            <PaperModal
              visible={changePasswordModalVisible}
              nextModal={handleChangeToChanged}
              hideModal={handleCloseModal}
              title="Change Password"
              iocnUrl={require('../../../assets/icons/changePassword.png')}
              description="Congratulations! Your email is verified. Enter your new password."
              btnText1="Save"
              btnText2="Cancel">
              <TextField
                label="Password"
                placeholder="*****"
                value={password}
                // secureTextEntry
                onChangeText={password => setPassword(password)}
              />

              <TextField
                label="Confirm Password"
                placeholder="*****"
                value={password}
                // secureTextEntry
                onChangeText={password => setPassword(password)}
              />
            </PaperModal>

            <PaperModal
              visible={passwordChangedModalVisible}
              hideModal={handleCloseModal}
              title="Password Changed"
              iocnUrl={require('../../../assets/icons/passwordChanged.png')}
              description="Congratulations! Now you can login with your new password"
              btnText1="Login"
            />

            <CustomButton title="Sign In" mode="contained" onPress={() => console.log("Sign-IN")} />

            <TextButton
              title="Don't have account?"
              textColor={theme.colors.text}
              onPress={() => navigation.navigate('Registration')}
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

  styledCard: {backgroundColor: 'white', padding: 10, borderRadius: 8},

  styledTitle: {
    color: theme.colors.primary,
    fontFamily: 'Roboto',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default LoginScreen;
