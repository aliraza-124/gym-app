import React from "react";
import { StyleSheet, View } from "react-native";
import { Card, Divider, Text } from "react-native-paper";

import { Formik } from "formik";
import * as Yup from "yup";

import BackgroundImage from "../../components/backgroundImage";
import CustomButton from "../../components/button";
import AppButton from "../../components/customButton";
import AppTextInput from "../../components/textInput";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[0-9])/,
      "Password must contain at least one special character"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    ),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});



export default function RegistrationScreen({ navigation }) {

  const handleRegister = (values) => {
    console.log(values)
    navigation.navigate('profile')
  }
  return (
    <BackgroundImage source={require("../../../assets/images/background.png")}>
      <View style={styles.styledContainer}>
        <Card style={styles.styledCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.styledTitle}>
              Sign Up
            </Text>
            <Formik
              initialValues={{ email: "", name: "", password: "", confirmPassword: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleRegister(values)}
            >
              {({ handleSubmit, handleChange, errors }) => (
                <>
                  <View style={{ gap: 20, marginTop: 20 }}>
                    <AppTextInput
                      label={"Name"}
                      type={"text"}
                      onChangeText={handleChange("name")}
                      placeholder={"Enter your name"}
                      keyboardType={"default"}
                      errors={errors.name}
                    />
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
                    <AppTextInput
                      label={"Confirm Password"}
                      type={"text"}
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
              onPress={navigation.navigate('login')}
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
