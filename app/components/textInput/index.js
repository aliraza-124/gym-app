import * as React from "react";
import { Text, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export default function AppTextInput({
  errors,
  keyboardType,
  label,
  onChangeText,
  placeholder,
  secureTextEntry,
  value,
  disabled,
  multiline,
  numberOfLines

}) {
  return (
    <View>
      <TextInput
        dense="true"
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        style={styles.textInput}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        disabled={disabled}
        multiline={multiline}
        numberOfLines={numberOfLines}

        // right={<TextInput.Icon icon="eye" />}
      />
      {errors && <Text style={styles.errorText}>{errors}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    // paddingTop:10,
    // height: 40,
  },
  errorText: {
    color: "#FA2D5E",
  },
});
