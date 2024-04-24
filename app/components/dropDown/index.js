import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, TextInput, useTheme } from 'react-native-paper';

const GenderDropdown = ({ value, onChange, error }) => {

    const theme = useTheme();
    
    const pickerRef = useRef(null);
    const handlePressTextInput = () => {
        if (pickerRef.current) {
            pickerRef.current.focus();
        }
    };
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handlePressTextInput}>
            <TextInput
                mode='outlined'
                label={'Gender'}
                editable={false}
                value={value}
                onFocus={handlePressTextInput}
                right={<TextInput.Icon icon={'chevron-down'} color={theme.colors.primary} onPress={handlePressTextInput} />}
            />

        </TouchableOpacity>
        <Picker
            ref={pickerRef}
            selectedValue={value}
            onValueChange={onChange}
            style={styles.picker}
            itemStyle={{color:'red', backgroundColor:'red'}}
        >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
        </Picker>


        {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    display:'none',
    textDecorationLine: 'underline'
    // borderWidth: 1,
    // borderColor: '#ccc',
    // borderRadius: 5,
    // marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default GenderDropdown;
