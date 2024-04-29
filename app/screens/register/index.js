import React, { useState } from "react";
import { Alert } from "react-native";

import { useBranchId } from "../../context/qrContext";
import { useMutation } from "react-query";
import { signUp } from "../../utils/api";
import RegisterForm from "./registerForm";

export default function RegistrationScreen({ navigation }) {
  const { branchId } = useBranchId();
  console.log("branch-Id : ", branchId);
  const [errorMessage, setErrorMessage] = useState("");

  // Function to handle error
  const handleError = (message) => {
    setErrorMessage(message);
  };

  // Function to close error modal
  const closeErrorModal = () => {
    setErrorMessage("");
  };

  const signUpMutation = useMutation((values) => signUp(values, branchId));

  const handleRegister = async (values, actions) => {
    try {
      const data = await signUpMutation.mutateAsync(values);
      Alert.alert("Signed Up Successfully");
      navigation.navigate("login");
      console.log("Sign-up successful:", data);
      actions.resetForm();
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        if (data && data.statusCode && data.message) {
          handleError("Sign up error:" + data.statusCode + " " + data.message);
          // console.error("Sign up error:"+  data.statusCode + " " + data.message);
        } else {
          handleError(
            "Sign up error: " +
              error.response.status +
              " " +
              error.response.data
          );

          // console.error(
          //   "Sign up error:",
          //   error.response.status,
          //   error.response.data
          // );
        }
      } else {
        handleError("Sign up error: " + error.message);
        // console.error("Sign up error:", error.message);
      }
    }
  };

  return (
    <RegisterForm
      navigation={navigation}
      handleRegister={handleRegister}
      errorMessage={errorMessage}
      closeErrorModal={closeErrorModal}
    />
  );
}
