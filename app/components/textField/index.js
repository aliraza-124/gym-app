import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';

const TextField = ({
  label,
  placeholder,
  value,
  inputMode,
  secureTextEntry,
  onChangeText,
  errors,
}) => {
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
        inputMode={inputMode}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        dense="true"
        theme={theme}
        style={styles.styledTextField}
      />

      {errors && <Text style={styles.styledError}>{errors}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  styledError: {color: 'red'},
});

export default TextField;
