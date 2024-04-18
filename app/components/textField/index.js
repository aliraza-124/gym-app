import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

const TextField = ({label, placeholder, value, onChangeText, secureTextEntry}) => {


  return (
    <View>
      <TextInput
        label={label}
        mode="outlined"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        dense= 'true'
        style={styles.styledTextField}
        secureTextEntry={secureTextEntry}
      />
    </View>

  
  );
};

const styles = StyleSheet.create({
  styledTextField: {},
});

export default TextField;
