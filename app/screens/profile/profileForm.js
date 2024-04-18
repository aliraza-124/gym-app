import React from "react";
import { StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";
import { Formik } from "formik";
import * as Yup from "yup";
import AppTextInput from "../../components/textInput";
import Heading from "../../components/heading";
import AppButton from "../../components/customButton";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";
import ImagePicker from "../../components/imagePicker";
import DatePicker from "../../components/datePicker";

const validationSchema = Yup.object().shape({
//   name: Yup.string().required("Name is required"),
//   email: Yup.string().email("Invalid email").required("Email is required"),
//   dob: Yup.string().required("Date of Birth is required"),
//   weight: Yup.number().required("Weight is required").min(1, "Weight must be at least 1"),
//   gender: Yup.string().required("Gender is required"),
//   password: Yup.string()
//     .required("Password is required")
//     .min(6, "Password must be at least 6 characters"),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref("password"), null], "Passwords must match")
//     .required("Confirm Password is required"),
//   phoneNo: Yup.string().required("Phone No is required"),
//   address: Yup.string().required("Address is required"),
//   emergencyContactName: Yup.string().required(
//     "Emergency Contact Name is required"
//   ),
//   emergencyContactNo: Yup.string().required("Emergency Contact No is required"),
});

export default function ProfileForm({ navigation }) {

  return (
    <KeyboardAvoidingScrollView keyboardDismissMode="none">
      <View style={styles.container}>
        <Text style={styles.heading}>Complete Profile</Text>
        <View style={styles.card}>
          <ImagePicker />
          <Heading title={"Basic Information"} />
          <Formik
            initialValues={{
              name: "",
              email: "",
              dob: null,
              weight:"",
              gender: "",
              password: "",
              confirmPassword: "",
              phoneNo: "",
              address: "",
              emergencyContactName: "",
              emergencyContactNo: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)} // Replace with your submit function
          >
            {({ handleSubmit, handleChange, setFieldValue, values, errors }) => (
              <>
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
                  errors={errors.email}
                />
                <DatePicker
                  label={"Date of Birth"}
                  value={values.dob}
                  onChange={(date) => setFieldValue("dob", date)} // Update DOB state using setFieldValue
                />
                {/* <DatePicker 
                    label={"Date of Birth"}
                    value={values.dob}
                /> */}
                {/* <AppTextInput
                  label={"Date of Birth"}
                  value={values.dob}
                  onChangeText={handleChange("dob")}
                  placeholder={"Enter your date of birth"}
                  keyboardType={"default"}
                  errors={errors.dob}
                /> */}
                 <AppTextInput
                  label={"Weight"}
                  value={values.weight}
                  onChangeText={handleChange("weight")}
                  placeholder={"Enter your weight"}
                  keyboardType={"numeric"}
                  errors={errors.weight}
                />
                <AppTextInput
                  label={"Gender"}
                  value={values.gender}
                  onChangeText={handleChange("gender")}
                  placeholder={"Enter your gender"}
                  keyboardType={"default"}
                  errors={errors.gender}
                />
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
                  <AppButton
                    title={"Save"}
                    variant={"contained"}
                    onPress={handleSubmit}
                  />
                  <AppButton
                    title={"Cancel"}
                    variant={"outlined"}
                    onPress={navigation.goBack}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
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
