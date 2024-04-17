import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Avatar, Card, Divider} from 'react-native-paper';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';

import {Formik} from 'formik';
import {profileValidationSchema} from '../../validation/validationSchemas';

import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import BackgroundIcon from '../../components/backgroundIcon';
import theme from '../../theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { launchImageLibrary } from 'react-native-image-picker';

const initialValues = {
  name: '',
  email: '',
  dob: '',
  weight: '',
  gender: '',
  password: '',
  confirmPassword: '',

  phone: '',
  address: '',

  contactName: '',
  contactNumber: '',
};

const CompleteProfile = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState();
  const openLibrary = async () => {
    const LibraryResult = await launchImageLibrary({mediaType: 'photo'});
    if (!LibraryResult.didCancel && !LibraryResult.error) {
      setSelectedImage(LibraryResult.assets[0].uri);
      //   setCamImage(null);
    }
  };

  return (
    <>
      <View style={styles.styledContainer}>
        <BackgroundIcon />
        <KeyboardAvoidingScrollView
          keyboardDismissMode="none"
          showsVerticalScrollIndicator={false}>
          <Text style={styles.styledTitle}>Complete Profile</Text>
          <Card style={styles.styledCard}>
            <Card.Content>
              <View style={{gap: 14}}>
                <View style={{alignItems: 'center', marginVertical: 14}}></View>
                <View
                  flex={1}
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  position="relative">
                  {selectedImage ? (
                    <Avatar.Image
                      size={140}
                      source={{uri: selectedImage}}
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
                      // padding: 10,
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
                  initialValues={initialValues}
                  validationSchema={profileValidationSchema}
                  onSubmit={(values, actions) => {
                    console.log(values);
                    navigation.navigate('Login');
                    actions.resetForm();
                  }}>
                  {({
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    isSubmitting,
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

                      <TextField
                        label="Gender"
                        placeholder="Enter your gender"
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
                          title="Cancel"
                          mode="outlined"
                          onPress={() => navigation.navigate('Login')}
                        />
                      </View>
                    </>
                  )}
                </Formik>
              </View>
            </Card.Content>
          </Card>
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

  styledTitle: {
    color: theme.colors.text,
    fontFamily: 'Roboto',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 140,
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

export default CompleteProfile;
