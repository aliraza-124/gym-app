import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const TextField = ({label, placeholder, value, onChangeText}) => {
  const theme = {
    colors: {
      primary: '#FA2D5E',
      text: '#333333',
      background: 'white',
      placeholder: '#979797',
    },
  };

  return (
    <View>
      <TextInput
        label={label}
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        dense= 'true'
        theme={theme}
        style={styles.styledTextField}
      />
    </View>

    // <Text variant="titleLarge" style={styles.styledTitle}>
    //   Sign In
    // </Text>

    // <TextInput
    //   label="Email"
    //   mode="outlined"
    //   placeholder="Enter your email"
    //   value={text}
    //   onChangeText={text => setText(text)}
    //   theme={theme}
    // />

    // <TextInput
    //   label="Password"
    //   mode="outlined"
    //   placeholder="Enter your password"
    //   value={text}
    //   onChangeText={text => setText(text)}
    //   theme={theme}
    // />

    // <Button
    //   mode="text"
    //   textColor="#FA2D5E"
    //   style={{
    //     alignItems: 'flex-end',
    //     borderRadius: 0,
    //   }}
    //   onPress={() => console.log('Pressed')}>
    //   Forgot Password?
    // </Button>

    // <Button
    //   mode="contained"
    //   style={{
    //     marginTop: 4,
    //     backgroundColor: '#FA2D5E',
    //     borderRadius: 4,
    //     paddingVertical: 3,
    //   }}
    //   onPress={() => console.log('Pressed')}>
    //   Sign In
    // </Button>

    // <Button
    //   mode="text"
    //   textColor="#333333"
    //   style={{
    //     alignItems: 'flex-end',
    //     borderRadius: 0,
    //   }}
    //   onPress={() => console.log('Pressed')}>
    //   Don't have account?
    // </Button>
  );
};

const styles = StyleSheet.create({
  styledTextField: {},
});

export default TextField;
