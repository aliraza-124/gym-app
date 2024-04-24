import BackgroundImage from "../../components/backgroundImage";
import ProfileForm from "./profileForm";
import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import axios from "axios";
import { useUser } from "../../context/userContext";
import * as Yup from "yup";
import { tokens } from "react-native-paper/lib/typescript/styles/themes/v3/tokens";
import { useMutation, useQuery } from "react-query";
import {  getProfile, updateProfile } from "../../utils/api";
import { ActivityIndicator } from "react-native-paper";
import { validationSchemaProfile } from "../../utils/validations";

export default function Profile({ navigation }) {
  const validationSchema = validationSchemaProfile;
  const { user } = useUser();
  const [userData, setUserData] = useState(null);

  // console.log("Token",user.token);
  // const getLoggedInUserInfo = async () => {
  //   try {
  //     const response = await axios.get("https://api.dev.inzer.com.au/user/me", {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`,
  //       },
  //     });
  //     setUserData(response.data);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // };
  useEffect(() => {
    const getLoggedInUserInfo = async () => {
      if (user && user.token) {
        try {
          const response = await getProfile(user.token);
          setUserData(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    getLoggedInUserInfo();
  }, [user]);

  useEffect(() => {
    if (userData === null) return; // Do nothing if userData is null

    // Now you can access userData safely
    console.log("LoggedIn user's data", userData);

    if (userData.status === "error") {
      console.error("Error fetching user data:", userData.message);
    }
  }, [userData]);

  const ProfileMutation = useMutation((data) =>
    updateProfile(data, user.token)
  );

  const handleSubmitProfile = async (values) => {
    try {
      const response = await ProfileMutation.mutateAsync(values);
      Alert.alert("Success", "Profile updated successfully");
      console.log("Profile updated successfully:", response);
      // navigation.navigate('NextScreen');
    } catch (error) {
      // Handle error
      Alert.alert("Failed", "Error updating profile");
      console.error("Error updating profile:", error.message);
    }
    // try {
    //   const response = await axios.put(
    //     'https://api.dev.inzer.com.au/user',
    //     {
    //       name: values.name,
    //       email: values.email,
    //       dateOfBirth : values.dob,
    //       weight : values.weight,
    //       gender : values.gender,
    //       phoneNumber : values.phoneNo,
    //       address : values.address,
    //       emergencyContactName : values.emergencyContactName,
    //       emergencyContactNumber : values.emergencyContactNo,
    //     },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     }
    //   );
    //   console.log('Response : -----------', response.data);
    //   Alert.alert('Success', 'Profile updated successfully');
    //   // navigation.navigate('NextScreen');
    // }  catch (error) {
    //   if (error.response) {
    //     //  server response with a status code
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // no response was received
    //     console.log(error.request);
    //   } else {
    //     // Something triggered an error
    //     console.log('Error', error.message);
    //   }
    //   console.log(error.config);
    // }
  };

  return (
    <View style={styles.container}>
      <BackgroundImage>
        {userData && (
          <ProfileForm
            navigation={navigation}
            handleSubmitProfile={handleSubmitProfile}
            token={user.token}
            userData={userData}
            validationSchema={validationSchema}
            isLoading={ProfileMutation.isLoading}
          />
        )}
      </BackgroundImage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor:'#EEF1F2',
    flex: 1,
    padding: 2,
    paddingBottom: 0,
  },
});
