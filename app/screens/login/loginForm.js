import { StyleSheet, View,  } from 'react-native'
import { Card, Text } from 'react-native-paper'
import React from 'react';
import CustomButton from '../../components/button';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AppTextInput from '../../components/textInput';
import AppButton from '../../components/customButton';


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });
export default function LoginForm({handleLogin, handleForgotPassword, }) {
  return (
    <View style={styles.styledContainer}>
        <Card style={styles.styledCard}>
          <Card.Content>
            <Text variant="titleLarge" style={styles.styledTitle}>
              Sign In
            </Text>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => handleLogin(values)}
            >
              {({ handleSubmit, handleChange, errors }) => (
                <>
                  <View style={{ gap: 2, marginTop:20 }}>
                   
                    <AppTextInput
                      label={"Email"}
                      type={"text"}
                      onChangeText={handleChange("email")}
                      placeholder={"Enter your email"}
                      keyboardType={"email-address"}
                      errors={errors.email}
                    />
                    <AppTextInput
                      label={"Password"}
                      type={"text"}
                      onChangeText={handleChange("password")}
                      placeholder={"Enter your password"}
                      keyboardType={"default"}
                      errors={errors.password}
                      secureTextEntry={true}
                    />
                    
                  </View>

                  <CustomButton
                    title="Forgot Password?"
                    mode="text"
                    onPress={handleForgotPassword}
                    style={{ color:"#FA2D5E", alignItems: 'flex-end', textDecorationLine: 'underline' }}
                  />

                  
                  <AppButton 
                  
                    title="Sign In"
                    variant="contained"
                    onPress={handleSubmit}
                  />

                  <CustomButton
                    title="Don't have account?"
                    mode="text"
                    onPress={()=>navigation.navigate('register')}
                    style={{  alignItems: 'flex-end' }}
                  />
                </>

          )}
          </Formik>

          </Card.Content>
        </Card>
      </View>
  )
}

const styles = StyleSheet.create({
    styledContainer: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      paddingHorizontal: 5,
    },
    styledCard: { backgroundColor: 'white', padding: 10, borderRadius: 8 },
    styledTitle: {
      color: '#FA2D5E',
      fontFamily: 'Roboto',
      fontSize: 27,
      fontWeight: 'bold',
      textAlign: 'left',
    },
  });
  