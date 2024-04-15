import { View, Text, StyleSheet } from "react-native";
import React from "react";

import TextField from "../../components/textField";
import CustomButton from "../../components/button";
import { Card, Button } from "react-native-paper";
import BackgroundImage from "../../components/backgroundImage";
import Model from "../../components/model";

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [visible, setVisible] = React.useState(false);
  const [verifyEmail, setVerifyEmail] = React.useState(false);
  const [OTP, setOTP] = React.useState(false);
  const [newPassword, setNewPassword] = React.useState(false);
  const [passwordChanged, setPasswordChanged] = React.useState(false);

  const nextModal = () => {
    if (visible) {
      setVisible(false);
      setVerifyEmail(true);
    } else if (verifyEmail) {
      setVerifyEmail(false);
      setOTP(true);
    } else if (OTP) {
      setOTP(false);
      setNewPassword(true);
    }
     else if (newPassword) {
      setNewPassword(false);
      setPasswordChanged(true);
    }
  };
  
  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    setVerifyEmail(false);
    setOTP(false);
    setNewPassword(false);
    setPasswordChanged(false)

  }
  
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
                // secureTextEntry
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            <CustomButton
              title={
                <Text style={{ textDecorationLine: "underline" }}>
                  Forgot Password?
                </Text>
              }
              mode="text"
              textColor="#FA2D5E"
              onPress="Forgot Password?"
              style={{
                alignItems: "flex-end",
                textDecorationLine: "underline",
              }}
            />

            <CustomButton
              title="Sign In"
              mode="contained"
              onPress="Sign-In"
              style={{
                backgroundColor: "#FA2D5E",
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
                alignItems: "flex-end",
              }}
            />
            <Button onPress={showModal}>Show Model</Button>
            {/* ------------------------------------Models------------------------------------- */}
              <Model
                visible={visible}
                // showModal={showModal}
                hideModal={hideModal}
                onPress={nextModal}
                iconUrl={require("../../../assets/images/icon.png")}
                title="Forgot Password"
                btnTitle1="Next"
                btnTitle2="Back"
                description="Don’t Worry! It happens. Please add email associated with your account."
              >
                <TextField label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} />
            </Model>

              <Model
                visible={verifyEmail}
                // showModal={showModal}
                hideModal={hideModal}
                onPress={nextModal}
                iconUrl={require("../../../assets/images/email.png")}
                title="Verify Email"
                btnTitle1="Verify"
                btnTitle2="Cancel"
                description="You are doing good!. Please check the email you have entered. We have sent an OTP code on it."
              >
            </Model>

              <Model
                visible={OTP}
                // showModal={showModal}
                onPress={nextModal}
                hideModal={hideModal}
                iconUrl={require("../../../assets/images/otp.png")}
                title="Enter OTP"
                btnTitle1="Submit"
                btnTitle2="Cancel"
                description="Enter OTP code send to your email."
              >
                <TextField label="OTP" placeholder="Enter OTP"  onChangeText={''} />
            </Model>
              <Model
                visible={newPassword}
                // showModal={showModal}
                onPress={nextModal}
                hideModal={hideModal}
                iconUrl={require("../../../assets/images/password.png")}
                title="Change Password"
                btnTitle1="Save"
                btnTitle2="Cancel"
                description="Congratulations! Your email is verified. Enter your new password."
              >
                <TextField label="Password" placeholder="Enter your Password" value={password} onChangeText={setPassword} />
                <TextField label="Password" placeholder="Enter your Password" value={password} onChangeText={setPassword} />
            </Model>
              <Model
                visible={passwordChanged}
                // showModal={showModal}
                onPress={nextModal}
                hideModal={hideModal}
                iconUrl={require("../../../assets/images/done.png")}
                title="Password Changed"
                btnTitle1="Login"
                // btnTitle2="Cancel"
                description="Congratulations! Now you can login with your new password"
              >
                <TextField label="Email" placeholder="Enter your email" value={email} onChangeText={setEmail} />
            </Model>
          </Card.Content>
        </Card>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 5,
  },

  styledCard: { backgroundColor: "white", padding: 10, borderRadius: 8 },

  styledTitle: {
    color: "#FA2D5E",
    fontFamily: "Roboto",
    fontSize: 27,
    fontWeight: "bold",
    textAlign: "left",
  },
});

export default LoginScreen;
