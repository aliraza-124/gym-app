import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import {  Text, TextInput } from 'react-native-paper';
import AppButton from '../customButton';

export default function DatePicker({ label, value, onChange }) {
    const [date, setDate] = useState(new Date());
    const [inputValue, setInputValue] = useState(date);
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    console.log(value)
//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate;
//     setDate(currentDate);
//   };
useEffect(() => {
    if (date) {
        
        setInputValue(date);
    }
}, []);

const handleDateChange = (event, selectedDate) => {
    setShow(false);
    
    const currentDate = selectedDate || date;
    setDate(currentDate); 
    onChange(currentDate); 
    // setInputValue(currentDate);
};


    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
      };
    

 


  return (
    <View>
        <TouchableOpacity onPress={showDatepicker}>
            <TextInput
                mode="outlined"
                label={label}
                // value={value.toLocaleString()}
                // value={date.toLocaleDateString() }
                // value={value ? value.toLocaleString() : ''}
                value={inputValue.toLocaleString()}
                onPressIn={showDatepicker}
                right={<TextInput.Icon icon="calendar-blank" color={'red'} onPress={showDatepicker} />}
                editable={false} 
            />
        </TouchableOpacity>

      <Text>DatePicker</Text>
      
      {show && (
        <DateTimePicker
            testID="dateTimePicker"
            value={new Date()}
            mode={mode}
            is24Hour={true}
        //   onChange={onChange}
            onChange={handleDateChange}
            display='calendar'
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({})