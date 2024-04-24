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
          handleError("Sign up error:"+ data.statusCode + " " + data.message);
          // console.error("Sign up error:"+  data.statusCode + " " + data.message);
        } else {
          handleError(
            "Sign up error: "+
            error.response.status+ " " +
            error.response.data);

          // console.error(
          //   "Sign up error:",
          //   error.response.status,
          //   error.response.data
          // );
        }
      } else {
        handleError("Sign up error: "+ error.message);
        // console.error("Sign up error:", error.message);
      }
    }
  };

  // const signUpMutation = useMutation(async (values) => {
  //   const response = await axios.post(
  //     "https://api.dev.inzer.com.au/user/signup",
  //     {
  //       name : values.name,
  //       email: values.email,
  //       password: values.password,
  //       from: "user",
  //       role: "user",
  //       // branchId: '2038bd2a-05ee-451d-a3a2-69bd31a2dc59',
  //       //provided QR for branches are disbaled
  //       branchId: branchId,
  //     }
  //   );
  //   return response.data;
  // });

  // const handleRegister = async(values, actions) => {
  //   console.log(values)
  //   // signUp(values);
  //   // navigation.navigate('profile')
  //   try {
  //     const data = await signUpMutation.mutateAsync(values);
  //     console.log("Sign up successful:", data);
  //     navigation.navigate('profile');
  //     actions.resetForm();
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       const { data } = error.response;
  //       console.error("Sign up error:", data.statusCode, data.message);
  //     } else {
  //       console.error("Sign up error:", error.response.status, error.response.data);
  //     }
  //   }
  // }
  return (
    <RegisterForm
      navigation={navigation}
      handleRegister={handleRegister}
      errorMessage={errorMessage}
      closeErrorModal={closeErrorModal}
    />
    // <BackgroundImage source={require("../../../assets/images/background.png")}>
    //   <View style={styles.styledContainer}>
    //     <Card style={styles.styledCard}>
    //       <Card.Content>
    //         <Text variant="titleLarge" style={styles.styledTitle}>
    //           Sign Up
    //         </Text>
    //         <Formik
    //           initialValues={{ email: "", name: "", password: "", confirmPassword: "" }}
    //           validationSchema={validationSchema}
    //           onSubmit={handleRegister}
    //           // onSubmit={(values) => handleRegister(values)}
    //         >
    //           {({ handleSubmit, handleChange, errors, values }) => (
    //             <>
    //               <View style={{ gap: 20, marginTop: 20 }}>
    //                 <AppTextInput
    //                   label={"Name"}
    //                   type={"text"}
    //                   value={values.name}
    //                   onChangeText={handleChange("name")}
    //                   placeholder={"Enter your name"}
    //                   keyboardType={"default"}
    //                   errors={errors.name}
    //                 />
    //                 <AppTextInput
    //                   label={"Email"}
    //                   type={"text"}
    //                   value={values.email}
    //                   onChangeText={handleChange("email")}
    //                   placeholder={"Enter your email"}
    //                   keyboardType={"email-address"}
    //                   errors={errors.email}
    //                 />

    //                 <AppTextInput
    //                   label={"Password"}
    //                   type={"text"}
    //                   value={values.password}
    //                   onChangeText={handleChange("password")}
    //                   placeholder={"Enter your password"}
    //                   keyboardType={"default"}
    //                   errors={errors.password}
    //                   secureTextEntry={true}
    //                 />
    //                 <AppTextInput
    //                   label={"Confirm Password"}
    //                   type={"text"}
    //                   value={values.confirmPassword}
    //                   onChangeText={handleChange("confirmPassword")}
    //                   placeholder={"Enter your password again"}
    //                   keyboardType={"default"}
    //                   errors={errors.confirmPassword}
    //                   secureTextEntry={true}
    //                 />

    //                 <AppButton
    //                   title="Sign Up"
    //                   variant="contained"
    //                   onPress={handleSubmit}
    //                 />
    //               </View>
    //             </>
    //           )}
    //         </Formik>

    //         <View
    //           style={{
    //             marginVertical: 20,
    //             flexDirection: "row",
    //             justifyContent: "center",
    //             alignItems: "center",
    //           }}
    //         >
    //           <Divider horizontalInset style={styles.divider} />
    //           <Text>or Sign up with</Text>
    //           <Divider horizontalInset style={styles.divider} />
    //         </View>

    //         <View
    //           style={{
    //             justifyContent: "center",
    //             flexDirection: "row",
    //             gap: 10,
    //             marginBottom: 10,
    //           }}
    //         >
    //           <AppButton
    //             icon={"google"}
    //             title="Google"
    //             variant={"outlined"}
    //             onPress={() => console.log("Google")}
    //           />
    //           <AppButton
    //             icon={"facebook"}
    //             title="Facebook"
    //             variant={"outlined"}
    //             onPress={() => console.log("Facebook")}
    //           />
    //         </View>

    //         <CustomButton
    //           title="Already have an account?"
    //           mode="text"
    //           onPress={() => navigation.navigate('login')}
    //           style={{
    //             color: "#FA2D5E",
    //             alignItems: "center",
    //             textDecorationLine: "underline",
    //           }}
    //         />
    //       </Card.Content>
    //     </Card>
    //   </View>
    // </BackgroundImage>
  );
}
