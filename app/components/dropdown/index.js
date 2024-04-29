import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import theme from '../../theme';
import TextField from '../textField';

const DropDownList = ({value, onChangeText, errors}) => {
  const [showDropDown, setShowDropDown] = useState(false);

  const genderList = [
    {
      label: 'Male',
      value: 'male',
    },
    {
      label: 'Female',
      value: 'female',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];

  return (
    <View>
      <DropDown
        label={'Gender'}
        mode={'outlined'}
        visible={showDropDown}
        showDropDown={() => setShowDropDown(true)}
        onDismiss={() => setShowDropDown(false)}
        value={value}
        setValue={onChangeText}
        // setValue={(value) => {
        //   // Update Formik field value
        //   setFieldValue('gender', value);
        // }}
        list={genderList}
        activeColor={theme.colors.text}
        inputProps={{
          style: {
            backgroundColor: theme.colors.white,
          },
        }}
        dropDownStyle={{
          color: theme.colors.white,
          backgroundColor: 'transparent',
          shadowColor: theme.colors.white,
        }}
        dropDownItemStyle={{
          backgroundColor: theme.colors.white,
        }}
        dropDownItemTextStyle={{color: theme.colors.text}}
        dropDownItemSelectedStyle={{
          backgroundColor: theme.colors.primary,
        }}
      />

      {errors && <Text style={{color: 'red'}}>{errors}</Text>}
    </View>
  );
};

export default DropDownList;
