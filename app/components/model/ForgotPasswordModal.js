import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Avatar, Modal, Portal, Text } from "react-native-paper";
import AppButton from "../customButton";
import TextField from "../textField";

export default function Model({
  visible,
  hideModal,
  step,
  handleNext
}) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [ModelTitle, setModelTitle] = useState('');
  const [btnTitle1, setBtnTitle1] = useState('');
  const [btnTitle2, setBtnTitle2] = useState('');
  const [description, setDescription] = useState('');
  const [iconUrl, setIconUrl] = useState(null);

  useEffect(() => {
    switch (step) {
      case 1:
        setIconUrl(require("../../../assets/images/icon.png"));
        setModelTitle('Forgot Password');
        setBtnTitle1("Next");
        setBtnTitle2("Back");
        setDescription('Don’t Worry! It happens. Please add email associated with your account.');
        break;
      case 2:
        setIconUrl(require("../../../assets/images/email.png"));
        setModelTitle('Verify Email');
        setBtnTitle1("Verify");
        setBtnTitle2("Cancel");
        setDescription("You are doing good!. Please check the email you have entered. We have sent an OTP code on it.");
        break;
      case 3:
        setIconUrl(require("../../../assets/images/otp.png"));
        setModelTitle('Enter OTP');
        setBtnTitle1("Submit");
        setBtnTitle2("Cancel");
        setDescription("Enter OTP code sent to your email.");
        break;
      case 4:
        setIconUrl(require("../../../assets/images/password.png"));
        setModelTitle('Change Password');
        setBtnTitle1("Save");
        setBtnTitle2("Cancel");
        setDescription("Congratulations! Your email is verified. Enter your new password.");
        break;
      
        
      default:
        setIconUrl(require("../../../assets/images/done.png"));
        setModelTitle('Password Changed');
        setBtnTitle1("Login");
        setDescription("Congratulations! Now you can login with your new password");
        break;
    }
  }, [step]);


  const renderFields = () => {
    switch (step) {
      case 1:
        return (
          <TextField
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
        );
      case 2:
        return null; // No fields for step 2
      case 3:
        return (
          <TextField
            label="OTP"
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
          />
        );
      case 4:
        return (
          <>
            <TextField
              label="New Password"
              placeholder="Enter your new password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
            <TextField
              label="Confirm Password"
              placeholder="Confirm your new password"
              value={newPassword}
              onChangeText={setNewPassword}
              secureTextEntry
            />
          </>
        );
      default:
        return null;
    }
  };

  const containerStyle = { backgroundColor: "white", padding: 20 };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={styles.container}
      >
        <View
          style={{ flexDirection: "row", justifyContent: "space-between" }}
        >
          <Text style={styles.title}>{ModelTitle}</Text>
          <TouchableWithoutFeedback onPress={hideModal}>
            <Avatar.Image
              size={24}
              source={require("../../../assets/images/GroupClose.png")}
              style={{ backgroundColor: "transparent" }}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.content}>
          <View style={styles.icon}>
            <Avatar.Image size={79} source={iconUrl} />
          </View>
          <Text style={styles.description}>{description}</Text>
          {renderFields()}
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <AppButton
              title={btnTitle1}
              variant={"contained"}
              onPress={handleNext}
            />
            <AppButton
              title={btnTitle2}
              variant={"outlined"}
              onPress={hideModal}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 40,
  },
  content: {
    padding: 12,
    gap: 24,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title : {
    color:'#333333',
    fontFamily:'Roboto',
    fontSize:16,
    fontWeight:600,
    textAlign:'left',
    lineHeight: 20,
    paddingBottom:10,
  }
});
