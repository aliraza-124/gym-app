import React, { useState } from "react";
import { Alert, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { ActivityIndicator, Button, Checkbox, Divider, Icon, Text, useTheme } from "react-native-paper";
import { Formik } from "formik";
import AppTextInput from "../../components/textInput";
import Heading from "../../components/heading";
import AppButton from "../../components/customButton";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import ImagePicker from "../../components/imagePicker";
import DatePicker from "../../components/datePicker";
import GenderDropdown from "../../components/dropDown";
import axios from "axios";
import AppCheckbox from "../../components/checkbox";
import { useUser } from "../../context/userContext";
import LoadingIndicator from "../../components/loadingIndicator";
import AppModel from "../../components/model";

export default function ProfileForm({
  navigation,
  userData ,
  handleSubmitProfile,
  token,
  validationSchema,
  isLoading
}) {
  const {showModal, setShowModal} = useState(false);
  const handleShareProfile = () => {
    setShowModal(true);
    console.log(showModal);
  };
  const [selectedImgUrl, setSelectedImageUrl] = useState(null);
//   const showQuoteDefault = userData?.data?.userPreference !== null && userData?.data?.userPreference?.showQuote !== null 
//   ? userData?.data?.userPreference?.showQuote 
//   : false;

// const isShowProfileDefault = userData?.data?.userPreference !== null && userData?.data?.userPreference?.isShowProfile !== null 
//   ? userData?.data?.userPreference?.isShowProfile 
//   : false;
  const theme = useTheme();
  const {toggleLogin} = useUser();
  return (
    <KeyboardAvoidingScrollView keyboardDismissMode="none">
      <View style={styles.container}>
        <View style={{alignItems:'center', flexDirection:'row', gap:16}} >
          <TouchableWithoutFeedback onPress={handleShareProfile} >
            <Icon
              source="chevron-left-circle"
              color={theme.colors.primary}
              size={28}
            />
          </TouchableWithoutFeedback>
       
          <Text style={styles.heading}>Complete your Profile</Text>
        </View>
        {userData ? (
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
                acceptRequestMessage : userData?.data?.userPreference?.acceptRequestMessage || " ",
                declineRequestMessage : userData?.data?.userPreference?.declineRequestMessage || " ",
                showQuote : userData?.data?.userPreference?.showQuote || false,
                isShowProfile : userData?.data?.userPreference?.isShowProfile || false,
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
                  <Heading title={"User preferences"} />
                  <Divider />
                  <AppTextInput
                    label={"Accept request message"}
                    value={values.acceptRequestMessage}
                    onChangeText={handleChange("acceptRequestMessage")}
                    placeholder={"Enter accept request message"}
                    keyboardType={"default"}
                    multiline={true}
                    numberOfLines={5}
                    errors={errors.acceptRequestMessage}
                  />
                  <AppTextInput
                    label={"Decline Request Message"}
                    value={values.declineRequestMessage}
                    onChangeText={handleChange("declineRequestMessage")}
                    placeholder={"Enter decline request message"}
                    multiline={true}
                    numberOfLines={5}
                    keyboardType={"default"}
                    errors={errors.declineRequestMessage}
                  />
                  {/* <Checkbox.Item
                    label="View quotations upon sign in"
                    position="leading"
                    
                  /> */}
                  
                    <AppCheckbox
                      label="View quotations upon sign in"
                      value={values.showQuote}
                      onValueChange={(value) => setFieldValue('showQuote', value)}
                      // onValueChange={(value) => handleChange('showQuote')(value)}
                    />
                    <AppCheckbox
                      label="Share profile with other gym members"
                      value={values.isShowProfile}
                      onValueChange={(value) => setFieldValue('isShowProfile', value)}
                      // onValueChange={(value) => handleChange('showQuote')(value)}
                    />
               

                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                      justifyContent: "flex-start",
                      paddingVertical: 30,
                    }}
                  >
                    {isLoading ? (
                      <LoadingIndicator size="large" />
                    ) : (
                      <AppButton
                        title={"Save"}
                        variant={"contained"}
                        onPress={handleSubmit}
                      />
                    )}
                    <AppButton
                      title={"Skip/logout"}
                      variant={"outlined"}
                      onPress={()=>toggleLogin()}
                      // onPress={navigation.goBack}
                    />
                    <AppButton
                      title={"Share"}
                      variant={"outlined"}
                      onPress={()=>handleShareProfile()}
                      // onPress={navigation.goBack}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        ) : (
          <ActivityIndicator size={60} color="#FA2D5E"  style={styles.isLoading}/>
        )}
      </View>
      <AppModel visible={showModal} title={"Share your profile"}/>
    </KeyboardAvoidingScrollView>
  );
}

const styles  =  StyleSheet.create({
  container: {
    // marginTop: 120,
    gap: 8,
  },
  card: {
    padding: 20,
    // backgroundColor: "#fff",
    borderRadius: 4,
    gap: 8,
    paddingBottom: 10,
    backgroundColor:'#F7FAFB',
    borderColor: '#D2D4D5',
    borderWidth: 1,

  },
  heading: {
    textAlign: "center",
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: 700,
    color: "#000",
    paddingVertical:10,
  },
  isLoading: {
    marginTop: 100,
    alignSelf: "center",
  }
});
