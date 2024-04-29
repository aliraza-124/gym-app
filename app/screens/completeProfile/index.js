import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Avatar,
  Card,
  Divider,
  Icon,
  IconButton,
  RadioButton,
} from 'react-native-paper';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {Formik} from 'formik';
import {profileValidationSchema} from '../../validation/validationSchemas';

import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import BackgroundIcon from '../../components/backgroundIcon';
import theme from '../../theme';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import DropDownList from '../../components/dropdown';
import {useImagePicker} from '../../hooks/useImagePicker';
import {useUserContext} from '../../contexts/AuthContext';
import {loginUser, logoutUser} from '../../utils/api';
import {useMutation, useQuery} from 'react-query';
import CustomCheckbox from '../../components/checkbox';

import ImagePicker from 'react-native-image-crop-picker';
import PaperModal from '../../components/paperModal';

const CompleteProfileScreen = ({navigation, userData}) => {
  const {selectedImage, openLibrary} = useImagePicker();
  const [imagePath, setImagePath] = useState('');

  const [showQuote, setShowQuote] = useState();
  const [isShowProfile, setIsShowProfile] = useState();

  const [radioButtonValue, setRadioButtonValue] = React.useState('first');

  const [shareProfileModalVisible, setShareProfileModalVisible] =
    useState(false);

  const handleOpenModal = () => setShareProfileModalVisible(true);

  const handleProceedModal = () => {
    setShareProfileModalVisible(false);
    navigation.navigate('AppBottomTabs');
  };

  const handleCancelModal = () => {
    setShareProfileModalVisible(false);
    navigation.navigate('AppBottomTabs');
  };

  // ImagePicker.openPicker({
  //   width: 300,
  //   height: 400,
  //   cropping: true
  // }).then(image => {
  //   console.log(image);
  // });

  // useEffect(() => {
  //   if (userData === undefined) {
  //     return;
  //   }

  //   console.log('Complete Data ===== ', userData);
  //   const getImagePath =
  //     'https://api.dev.inzer.com.au/media-storage?key=' + userData?.media;

  //   console.log(
  //     'CP Screen Verify =========== ',
  //     userData?.name,
  //     userData?.email,
  //   );

  //   setImagePath(getImagePath);
  // }, [userData]);

  useEffect(() => {
    if (userData) {
      console.log('Complete Data ===== ', userData);
      const getImagePath =
        'https://api.dev.inzer.com.au/media-storage?key=' + userData.media;
      console.log(
        'CP Screen Verify =========== ',
        userData.name,
        userData.email,
      );
      setImagePath(getImagePath);
    }
  }, [userData]);

  const handleSkipCompleteProfile = () => {
    navigation.navigate('AppBottomTabs');
  };

  return (
    <>
      <View style={styles.styledContainer}>
        <KeyboardAvoidingScrollView
          keyboardDismissMode="none"
          showsVerticalScrollIndicator={false}>
          <View style={styles.upperContent}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <Icon
                source="chevron-left-circle"
                color={theme.colors.primary}
                size={30}
              />
            </TouchableWithoutFeedback>

            {/* <IconButton
              icon="chevron-left-circle"
              iconColor={theme.colors.primary}
              size={28}
              mode='contained-tonal'
              // animated='true'
              style={{padding: 0}}
              onPress={() => navigation.goBack()}
            /> */}
            <Text style={styles.styledTitle}>Complete your profile</Text>
          </View>

          {userData && (
            <Card style={styles.styledCard}>
              <Card.Content>
                <View style={{gap: 14}}>
                  <View
                    style={{alignItems: 'center', marginVertical: 14}}></View>
                  <View
                    flex={1}
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    position="relative">
                    {(userData && userData?.media) || selectedImage ? (
                      <Avatar.Image
                        size={140}
                        source={{
                          uri: !userData?.media ? selectedImage : imagePath,
                        }}
                        backgroundColor={theme.colors.primary}
                      />
                    ) : (
                      <Avatar.Icon
                        size={140}
                        icon="account"
                        backgroundColor={theme.colors.primary}
                      />
                    )}

                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        right: 0,
                        top: 28,
                        borderColor: theme.colors.white,
                        borderWidth: 2,
                        borderRadius: 100,
                      }}
                      onPress={openLibrary}>
                      <Avatar.Icon
                        size={40}
                        icon="pen"
                        backgroundColor={theme.colors.primary}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text style={styles.styledSubTitle}>Basic Infromation</Text>

                  <Formik
                    initialValues={
                      userData && {
                        name: userData.name || '',
                        email: userData.email || '',
                        dob: userData.dateOfBirth || '',
                        weight: userData.weight || '',
                        gender: userData.gender || '',
                        password: '',
                        confirmPassword: '',
                        phone: userData.phoneNumber || '',
                        address: userData.address || '',
                        contactName: userData.emergencyContactName || '',
                        contactNumber: userData.emergencyContactNumber || '',
                        acceptRequestMessage:
                          userData.userPreference?.acceptRequestMessage || '',
                        declineRequestMessage:
                          userData.userPreference?.declineRequestMessage || '',

                        showQuote: userData.userPreference?.showQuote || false,
                        isShowProfile:
                          userData.userPreference?.isShowProfilea || false,
                      }
                    }
                    validationSchema={profileValidationSchema}
                    onSubmit={(values, actions) => {
                      console.log(values);
                      handleOpenModal();
                      // navigation.navigate('Login');
                      actions.resetForm();
                    }}>
                    {({
                      handleChange,
                      handleSubmit,
                      values,
                      errors,
                      isSubmitting,
                      setFieldValue,
                    }) => (
                      <>
                        <TextField
                          label="Name"
                          placeholder="Enter your name"
                          value={values.name}
                          onChangeText={handleChange('name')}
                          errors={errors.name}
                        />
                        <TextField
                          label="Email"
                          placeholder="Enter your email"
                          value={values.email}
                          disabled={true}
                          onChangeText={handleChange('email')}
                          errors={errors.email}
                        />
                        <TextField
                          label="Date of Birth"
                          placeholder="Enter your date of birth"
                          value={values.dob}
                          onChangeText={handleChange('dob')}
                          errors={errors.dob}
                        />
                        <TextField
                          label="Weight"
                          placeholder="Enter your weight"
                          inputMode="decimal"
                          value={values.weight}
                          onChangeText={handleChange('weight')}
                          errors={errors.weight}
                        />
                        <DropDownList
                          value={values.gender}
                          onChangeText={handleChange('gender')}
                          errors={errors.gender}
                        />
                        <TextField
                          label="Password"
                          placeholder="Enter your password"
                          secureTextEntry
                          value={values.password}
                          onChangeText={handleChange('password')}
                          errors={errors.password}
                        />
                        <TextField
                          label="Confirm Password"
                          placeholder="Enter your confirm password"
                          secureTextEntry
                          value={values.confirmPassword}
                          onChangeText={handleChange('confirmPassword')}
                          errors={errors.confirmPassword}
                        />
                        <Text style={styles.styledSubTitle}>
                          Contact Infromation
                        </Text>
                        <Divider
                          style={{borderWidth: 1, borderBlockColor: '#D2D4D5'}}
                        />
                        <TextField
                          label="Phone No"
                          placeholder="Enter your phone no"
                          inputMode="numeric"
                          value={values.phone}
                          onChangeText={handleChange('phone')}
                          errors={errors.phone}
                        />
                        <TextField
                          label="Address"
                          placeholder="Enter your address"
                          value={values.address}
                          onChangeText={handleChange('address')}
                          errors={errors.address}
                        />
                        <Text style={styles.styledSubTitle}>
                          Emergency Contact Infromation
                        </Text>
                        <Divider
                          style={{borderWidth: 1, borderBlockColor: '#D2D4D5'}}
                        />
                        <TextField
                          label="Emergency Contact Name"
                          placeholder="Enter your contact name"
                          value={values.contactName}
                          onChangeText={handleChange('contactName')}
                          errors={errors.contactName}
                        />
                        <TextField
                          label="Emergency Contact No"
                          placeholder="Enter your contact no"
                          inputMode="numeric"
                          value={values.contactNumber}
                          onChangeText={handleChange('contactNumber')}
                          errors={errors.contactNumber}
                        />
                        <Text style={styles.styledSubTitle}>
                          User Preferences
                        </Text>
                        <Divider
                          style={{borderWidth: 1, borderBlockColor: '#D2D4D5'}}
                        />
                        <TextField
                          label="Accept request message"
                          placeholder="Type message here sent to users once you accept their request."
                          value={values.acceptRequestMessage}
                          multiline={true}
                          numberOfLines={5}
                          onChangeText={handleChange('acceptRequestMessage')}
                          errors={errors.acceptRequestMessage}
                        />
                        <TextField
                          label="Decline request message"
                          placeholder="Type message here sent to users once you decline their request."
                          inputMode="numeric"
                          value={values.declineRequestMessage}
                          multiline={true}
                          numberOfLines={5}
                          onChangeText={handleChange('declineRequestMessage')}
                          errors={errors.declineRequestMessage}
                        />
                        {/* showQuote: userData.showQuote || '',
                          isShowProfile: userData.isShowProfile || '', */}

                        <View style={{alignItems: 'flex-start'}}>
                          <CustomCheckbox
                            label="View quotations upon sign in"
                            status={values.showQuote}
                            color={theme.colors.primary}
                            uncheckedColor={theme.colors.primary}
                            onPress={status => {
                              setFieldValue('showQuote', !status);
                            }}
                          />

                          <CustomCheckbox
                            label="Share profile with other gym members"
                            status={values.isShowProfile}
                            color={theme.colors.primary}
                            uncheckedColor={theme.colors.primary}
                            onPress={status => {
                              setFieldValue('isShowProfile', !status);
                            }}
                          />

                          {/* 
                          
                          // onChangeText={status =>
                            //   setFieldValue('showQuote', status)
                            // }
                            // onChangeText={handleChange('showQuote')}
                          <CustomCheckbox
                            label="Share profile with other gym members"
                            status={isShowProfile ? 'checked' : 'unchecked'}
                            // status={values.isShowProfile ? 'checked' : 'unchecked'}
                            color={theme.colors.primary}
                            uncheckedColor={theme.colors.primary}
                            onPress={() => {
                              setIsShowProfile(!isShowProfile);
                            }}
                          /> */}
                        </View>
                        <View
                          style={{
                            flexDirection: 'row',
                            gap: 10,
                          }}>
                          <CustomButton
                            title="Save"
                            mode="contained"
                            onPress={handleSubmit}
                          />
                          <CustomButton
                            title="skip"
                            mode="outlined"
                            onPress={handleSkipCompleteProfile}
                          />
                        </View>
                      </>
                    )}
                  </Formik>
                </View>
              </Card.Content>
            </Card>
          )}

          <PaperModal
            visible={shareProfileModalVisible}
            title="Share Your Profile"
            description="Display your profile for how many days"
            textPossiton="left"
            btnText1="Proceed"
            nextModal={handleProceedModal}
            hideModal={handleCancelModal}
            btnText2="Cancel"
            buttonsPossiton="flex-start">
            <RadioButton.Group
              onValueChange={radioButtonValue =>
                setRadioButtonValue(radioButtonValue)
              }
              value={radioButtonValue}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="first"
                  color={theme.colors.primary}
                  uncheckedColor={theme.colors.primary}
                />
                <Text>7 Days</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="second"
                  color={theme.colors.primary}
                  uncheckedColor={theme.colors.primary}
                  rippleColor="transparent"
                />
                <Text>14 Days</Text>
              </View>
            </RadioButton.Group>
            <TextField
              // label="Email"
              placeholder="Leave a message for your fellow gym members"
              multiline={true}
              numberOfLines={5}
              // value={messageforGymFellows}
              // onChangeText={messageforGymFellows =>
              //   setEmail(messageforGymFellows)
              // }
            />
          </PaperModal>
        </KeyboardAvoidingScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 15,
    backgroundColor: theme.colors.background,
  },

  upperContent: {flexDirection: 'row', alignItems: 'center', marginTop: 20},

  styledTitle: {
    color: theme.colors.text,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
  },

  styledCard: {backgroundColor: 'white', marginVertical: 14, borderRadius: 8},

  styledSubTitle: {
    color: theme.colors.primary,
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default CompleteProfileScreen;
