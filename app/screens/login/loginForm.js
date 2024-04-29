import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ActivityIndicator, Card } from "react-native-paper";
import BackgroundImage from "../../components/backgroundImage";
import CustomButton from "../../components/button";
import ForgotPasswordModal from "../../components/model/ForgotPasswordModal";
import AppButton from "../../components/customButton";

import * as Yup from "yup";
import { Formik } from "formik";
import AppTextInput from "../../components/textInput";
import ErrorComponent from "../../components/errorModal";
import LoadingIndicator from "../../components/loadingIndicator";


export default function LoginForm({
  navigation,
  handleLogin,
  errorMessage,
  closeErrorModal,
  isLoading,
  validationSchema
}) {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(1);

  const handleForgotPassword = () => {
    setStep(1);
    setVisible(true);
  };

  const handleNext = () => {
    step == 5 ? hideModal() : setStep(step + 1);
  };

  const hideModal = () => {
    setVisible(false);
    setStep(0);
  };
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
              onSubmit={handleLogin}
              // onSubmit={(values, actions) => handleLogin(values, actions)}
            >
              {({ handleSubmit, handleChange, errors, values }) => (
                <>
                  <View style={{ gap: 2, marginTop: 20 }}>
                    <AppTextInput
                      label={"Email"}
                      type={"text"}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      placeholder={"Enter your email"}
                      keyboardType={"email-address"}
                      errors={errors.email}
                    />
                    <AppTextInput
                      label={"Password"}
                      type={"text"}
                      value={values.password}
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
                    style={{
                      color: "#FA2D5E",
                      alignItems: "flex-end",
                      textDecorationLine: "underline",
                    }}
                  />
                  {isLoading ? (
                    <LoadingIndicator size={60} />
                  ) : (
                    <AppButton
                      title="Sign In"
                      variant="contained"
                      onPress={handleSubmit}
                    />
                  )}

                  <CustomButton
                    title="Don't have account?"
                    mode="text"
                    onPress={() => navigation.navigate("qr")}
                    style={{ alignItems: "flex-end" }}
                  />
                </>
              )}
            </Formik>
          </Card.Content>
        </Card>
      </View>
      {errorMessage && (
        <ErrorComponent message={errorMessage} onClose={closeErrorModal} />
      )}

      {/* <LoginForm handleLogin={handleLogin} handleForgotPassword={handleForgotPassword} /> */}

      <ForgotPasswordModal
        iconUrl={require("../../../assets/images/icon.png")}
        visible={visible}
        hideModal={hideModal}
        onPress={handleForgotPassword}
        step={step}
        handleNext={handleNext}
      ></ForgotPasswordModal>
    </BackgroundImage>
  );
}

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
