import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { ActivityIndicator, Divider, Text, useTheme } from "react-native-paper";
import { Formik } from "formik";
import AppTextInput from "../../components/textInput";
import Heading from "../../components/heading";
import AppButton from "../../components/customButton";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import ImagePicker from "../../components/imagePicker";
import DatePicker from "../../components/datePicker";
import GenderDropdown from "../../components/dropDown";
import axios from "axios";

export default function ProfileForm({
  navigation,
  userData,
  handleSubmitProfile,
  token,
  validationSchema,
  isLoading
}) {
  // const handleSubmitProfile = async (values) => {
  //   // console.log("Values in handle submit",values);
  //   try {
  //     console.log("Handle submit values---------", values);
  //     // if (user && user.token) {
  //     const response = await axios.put(
  //       'https://api.dev.inzer.com.au/user',
  //       {
  //         name: values.name,
  //         email: values.email,
  //         dob: values.dob,
  //         weight: values.weight,
  //         gender: values.gender,
  //         phoneNo: values.phoneNo,
  //         address: values.address,
  //         emergencyContactName: values.emergencyContactName,
  //         emergencyContactNo: values.emergencyContactNo,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );
  //     console.log('Response : -----------', response.data);
  //     Alert.alert('Success', 'Profile updated successfully');
  //     // navigation.navigate('NextScreen');
  //   // }
  //   }  catch (error) {
  //     if (error.response) {
  //       //  server response with a status code
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     } else if (error.request) {
  //       // no response was received
  //       console.log(error.request);
  //     } else {
  //       // Something triggered an error
  //       console.log('Error', error.message);
  //     }
  //     console.log(error.config);
  //   }
  // };

  // const {
  //   address,
  //   branchId,
  //   checkPassword,
  //   createdAt,
  //   dateOfBirth,
  //   deletedAt,
  //   email,
  //   emergencyContactName,
  //   emergencyContactNumber,
  //   gender,
  //   gymId,
  //   id,
  //   isEmailVerified,
  //   lastLoggedIn,
  //   media,
  //   name,
  //   otpCode,
  //   otpExpirationTime,
  //   phoneNumber,
  //   role,
  //   status,
  //   updatedAt,
  //   userPreference,
  //   username,
  //   weight,
  // } = userData?.data || {};
  // const URL = media ? `https://api.dev.inzer.com.au/media-storage?key=${media}` : '';
  const [selectedImgUrl, setSelectedImageUrl] = useState(null);
  return (
    <KeyboardAvoidingScrollView keyboardDismissMode="none">
      <View style={styles.container}>
        <Text style={styles.heading}>Complete Profile</Text>
        {userData && (
          <View style={styles.card}>
            <Formik
              initialValues={{
                name: userData?.data?.name || "",
                email: userData?.data?.email || "",
                dob: userData?.data?.dateOfBirth || null,
                weight: userData?.data?.weight || "",
                gender: userData?.data?.gender || "",
                password: "",
                confirmPassword: "",
                phoneNo: userData?.data?.phoneNumber || "",
                address: userData?.data?.address || "",
                emergencyContactName:
                  userData?.data?.emergencyContactName || "",
                emergencyContactNo:
                  userData?.data?.emergencyContactNumber || "",
                media: userData?.data?.media || null,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmitProfile}
              // onSubmit={(values)=>handleSubmitProfile(values)}
            >
              {({
                handleSubmit,
                handleChange,
                setFieldValue,
                values,
                errors,
              }) => (
                <>
                  {/* <ImagePicker 
                    media={values.media}
                  /> */}

                  <ImagePicker
                    media={
                      selectedImgUrl
                        ? selectedImgUrl
                        : `https://api.dev.inzer.com.au/media-storage?key=${values.media}`
                    }
                    onChangeImage={(uri) => {
                      setFieldValue("media", uri);
                      setSelectedImageUrl(uri);
                    }}
                    errors={errors.media}
                  />
                  <Heading title={"Basic Information"} />

                  <AppTextInput
                    label={"Name"}
                    value={values.name}
                    onChangeText={handleChange("name")}
                    placeholder={"Enter your name"}
                    keyboardType={"default"}
                    errors={errors.name}
                  />
                  <AppTextInput
                    label={"Email"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    placeholder={"Enter your email"}
                    keyboardType={"email-address"}
                    disabled={true}
                    errors={errors.email}
                  />
                  <DatePicker
                    label={"Date of Birth"}
                    value={values.dob}
                    // onChange={(date)=>handleChange("dob", date)}
                    onChange={(date) => setFieldValue("dob", date)}
                  />

                  <AppTextInput
                    label={"Weight"}
                    value={values.weight}
                    onChangeText={handleChange("weight")}
                    placeholder={"Enter your weight"}
                    keyboardType={"numeric"}
                    errors={errors.weight}
                  />
                  {/* Under construction using list items */}
                  {/* <GenderPicker
                  value={values.gender}
                  onChange={(gender)=> setFieldValue('gender', gender )}
                /> */}

                  {/* Native picker  */}
                  <GenderDropdown
                    value={values.gender}
                    onChange={handleChange("gender")}
                    // onChange={(gender)=> setFieldValue('gender', gender )}
                  />
                  {/* <AppTextInput
                  label={"Gender"}
                  value={values.gender}
                  onChangeText={handleChange("gender")}
                  placeholder={"Enter your gender"}
                  keyboardType={"default"}
                  errors={errors.gender}
                /> */}
                  <AppTextInput
                    label={"Password"}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    placeholder={"Enter your password"}
                    keyboardType={"default"}
                    errors={errors.password}
                    secureTextEntry={true}
                  />
                  <AppTextInput
                    label={"Confirm Password"}
                    value={values.confirmPassword}
                    onChangeText={handleChange("confirmPassword")}
                    placeholder={"Enter your password again"}
                    keyboardType={"default"}
                    errors={errors.confirmPassword}
                    secureTextEntry={true}
                  />
                  <Heading title={"Contact Information"} />
                  <Divider />
                  <AppTextInput
                    label={"Phone No"}
                    value={values.phoneNo}
                    onChangeText={handleChange("phoneNo")}
                    placeholder={"Enter your phone number"}
                    keyboardType={"phone-pad"}
                    errors={errors.phoneNo}
                  />
                  <AppTextInput
                    label={"Address"}
                    value={values.address}
                    onChangeText={handleChange("address")}
                    placeholder={"Enter your address"}
                    keyboardType={"default"}
                    errors={errors.address}
                  />
                  <Heading title={"Emergency Contact Information"} />
                  <Divider />
                  <AppTextInput
                    label={"Emergency Contact Name"}
                    value={values.emergencyContactName}
                    onChangeText={handleChange("emergencyContactName")}
                    placeholder={"Enter emergency contact name"}
                    keyboardType={"default"}
                    errors={errors.emergencyContactName}
                  />
                  <AppTextInput
                    label={"Emergency Contact No"}
                    value={values.emergencyContactNo}
                    onChangeText={handleChange("emergencyContactNo")}
                    placeholder={"Enter emergency contact number"}
                    keyboardType={"phone-pad"}
                    errors={errors.emergencyContactNo}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "center",
                      paddingVertical: 30,
                    }}
                  >
                    {isLoading ? (
                      <ActivityIndicator size="large" color="red" />
                    ) : (
                      <AppButton
                        title={"Save"}
                        variant={"contained"}
                        onPress={handleSubmit}
                      />
                    )}
                    <AppButton
                      title={"Skip"}
                      variant={"outlined"}
                      onPress={navigation.goBack}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        )}
      </View>
    </KeyboardAvoidingScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    gap: 8,
  },
  card: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 8,
    gap: 8,
    paddingBottom: 10,
  },
  heading: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: 700,
    color: "#FA2D5E",
  },
});
