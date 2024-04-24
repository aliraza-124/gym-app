import React, { useState } from "react";
import { StyleSheet, Alert } from "react-native";

import LoginForm from "./loginForm";
import { useUser } from "../../context/userContext";
import { useMutation } from "react-query";
import { login } from "../../utils/api";
import { validationSchemaLogin } from "../../utils/validations";

const LoginScreen = ({ navigation }) => {
  const validationSchema = validationSchemaLogin;
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUser();
  const loginMutation = useMutation(login);


  // Function to handle error
  const handleError = (message) => {
    setErrorMessage(message);
  };

  // Function to close error modal
  const closeErrorModal = () => {
  setErrorMessage('');
  }

  const handleLogin = async (values, actions) => {
    try {
      const response = await loginMutation.mutateAsync(values);
      // const userData = response.data.user;
      const { token, user } = response.data;
      setUser({ token, data: user });
      console.log("Login successful:", response);
      Alert.alert("Login successful");
      navigation.navigate("profile");
      actions.resetForm();
    } catch (error) {
      if (error.response && error.response.status === 401) {
        const { response } = error.response;
        if (response) {
          console.error("Login error:", response.statusCode, response.message);
          handleError(response.message);
        } else {
          handleError("Login error: Unauthorized");
        }
      } else if (error.response) {
        handleError(
          "Login error:",
          error.response.status,
          error.response.response
        );
      } else {
        handleError("Login error: Unauthorized");
      }
    }
  };

  // Api login
  // const loginMutation = useMutation(async (credentials) => {
  //   const response = await axios.post(
  //     "https://api.dev.inzer.com.au/user/login",
  //     {
  //       email: credentials.email,
  //       password: credentials.password,
  //       from : "user",
  //     }
  //   );
  //   return response.data;
  // });

  // const handleLogin = async (values) => {
  //   try {
  //     const data = await loginMutation.mutateAsync(values);
  //     console.log("Login successful:", data);
  //     navigation.navigate("profile");
  //   } catch (error) {
  //     if (error.response && error.response.status === 401) {
  //       const { data } = error.response;
  //       console.error("Login error:", data.statusCode, data.message);
  //       //  handle specific error messages / display to the user
  //       console.error("Login error:", data.statusCode, data.message)
  //     } else {
  //         console.error("Login error:", error.response.status, error.response.data);
  //       }
  //     }
  // };

  return (
    <LoginForm
      navigation={navigation}
      handleLogin={handleLogin}
      handleError={handleError}
      errorMessage={errorMessage}
      closeErrorModal={closeErrorModal}
      isLoading={loginMutation.isLoading}
      validationSchema={validationSchema}
    />
    
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
