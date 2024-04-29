import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Card, Divider} from 'react-native-paper';

import {Formik} from 'formik';
import {registrationValidationSchema} from '../../validation/validationSchemas';

import BackgroundImage from '../../components/backgroundImage';
import TextField from '../../components/textField';
import CustomButton from '../../components/button';
import TextButton from '../../components/textButton';
import IconButton from '../../components/iconButton';
import theme from './../../theme/index';

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationScreen = ({navigation, handleRegister}) => {
  return (
    <BackgroundImage source={require('../../../assets/images/background.png')}>
      <View style={styles.styledContainer}>
        <Card style={styles.styledCard}>
          <Card.Content>
            <View style={{gap: 10}}>
              <Text variant="titleLarge" style={styles.styledTitle}>
                Sign Up
              </Text>

              <Formik
                initialValues={initialValues}
                validationSchema={registrationValidationSchema}
                onSubmit={handleRegister}>
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
                      autoCapitalize="none"
                      onChangeText={handleChange('email')}
                      errors={errors.email}
                    />

                    <TextField
                      label="Password"
                      placeholder="Enter your password"
                      value={values.password}
                      secureTextEntry
                      onChangeText={handleChange('password')}
                      errors={errors.password}
                    />

                    <TextField
                      label="Confirm Password"
                      placeholder="Enter your confirm password"
                      value={values.confirmPassword}
                      secureTextEntry
                      onChangeText={handleChange('confirmPassword')}
                      errors={errors.confirmPassword}
                    />

                    <View style={{marginTop: 24}}>
                      <CustomButton
                        title="Sign Up"
                        mode="contained"
                        onPress={handleSubmit}
                      />
                    </View>

                    <View style={styles.styledDividerWrapper}>
                      <Divider style={styles.styledDivider} />
                      <Text style={{color: theme.colors.text}}>
                        Or sign up with
                      </Text>
                      <Divider style={styles.styledDivider} />
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        gap: 30,
                        marginBottom: 0,
                      }}>
                      <IconButton
                        icon="google"
                        title="Google"
                        onPress={() => console.log('Google')}
                      />

                      <IconButton
                        icon="facebook"
                        title="Facebook"
                        onPress={() => console.log('Facebook')}
                      />
                    </View>

                    <TextButton
                      title="Already have account?"
                      align="center"
                      underline="underline"
                      onPress={() => navigation.navigate('Login')}
                    />
                  </>
                )}
              </Formik>
            </View>
          </Card.Content>
        </Card>
      </View>
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  styledContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 5,
  },

  styledCard: {backgroundColor: 'white', padding: 10, borderRadius: 8},

  styledTitle: {
    color: '#FA2D5E',
    fontFamily: 'Roboto',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  styledDivider: {
    width: 94,
  },

  styledDividerWrapper: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
});

export default RegistrationScreen;
