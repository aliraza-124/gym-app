import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Divider, Text } from "react-native-paper";

import { Formik } from "formik";

import BackgroundImage from "../../components/backgroundImage";
import CustomButton from "../../components/button";
import AppButton from "../../components/customButton";
import AppTextInput from "../../components/textInput";
import ErrorComponent from "../../components/errorModal";
import { validationSchemaRegisteration } from "../../utils/validations";

export default function RegisterForm({
  navigation,
  handleRegister,
  errorMessage,
  closeErrorModal,
}) {
  return (
    <BackgroundImage source={require("../../../assets/images/background.png")}>
      <View style={styles.styledContainer}>
        <Card style={styles.styledCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.styledTitle}>
              Sign Up
            </Text>
            <Formik
              initialValues={{
                email: "",
                name: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchemaRegisteration}
              onSubmit={handleRegister}
              // onSubmit={(values) => handleRegister(values)}
            >
              {({ handleSubmit, handleChange, errors, values }) => (
                <>
                  <View style={{ gap: 20, marginTop: 20 }}>
                    <AppTextInput
                      label={"Name"}
                      type={"text"}
                      value={values.name}
                      onChangeText={handleChange("name")}
                      placeholder={"Enter your name"}
                      keyboardType={"default"}
                      errors={errors.name}
                    />
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
                    <AppTextInput
                      label={"Confirm Password"}
                      type={"text"}
                      value={values.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      placeholder={"Enter your password again"}
                      keyboardType={"default"}
                      errors={errors.confirmPassword}
                      secureTextEntry={true}
                    />

                    <AppButton
                      title="Sign Up"
                      variant="contained"
                      onPress={handleSubmit}
                    />
                  </View>
                </>
              )}
            </Formik>
              <ErrorComponent
                message={errorMessage}
                onClose={closeErrorModal}
              />
            <View
              style={{
                marginVertical: 20,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Divider horizontalInset style={styles.divider} />
              <Text>or Sign up with</Text>
              <Divider horizontalInset style={styles.divider} />
            </View>

            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                gap: 10,
                marginBottom: 10,
              }}
            >
              <AppButton
                icon={"google"}
                title="Google"
                variant={"outlined"}
                onPress={() => console.log("Google")}
              />
              <AppButton
                icon={"facebook"}
                title="Facebook"
                variant={"outlined"}
                onPress={() => console.log("Facebook")}
              />
            </View>

            <CustomButton
              title="Already have an account?"
              mode="text"
              onPress={() => navigation.navigate("login")}
              style={{
                color: "#FA2D5E",
                alignItems: "center",
                textDecorationLine: "underline",
              }}
            />
          </Card.Content>
        </Card>
      </View>
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
    styledCard: {
      backgroundColor: "white",
      padding: 10,
      borderRadius: 8,
    },
    styledTitle: {
      color: "#FA2D5E",
      fontFamily: "Roboto",
      fontSize: 27,
      fontWeight: "bold",
      textAlign: "left",
    },
    divider: {
      width: "28%", 
      // backgroundColor: theme.colors.primary, // Set background color as primary color
      height: 1, 
    },
  });
  