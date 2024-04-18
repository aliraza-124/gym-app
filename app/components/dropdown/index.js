import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import DropDown from 'react-native-paper-dropdown';
import Color from 'color';

import theme from '../../theme';

const DropDownList = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [gender, setGender] = useState('');

  //   const lightenedPrimaryColor = Color('#FA2D5E').lighten(0.1).hex();

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
        value={gender}
        setValue={setGender}
        list={genderList}
        activeColor={theme.colors.text}
        inputProps={{
          style: {
            backgroundColor: theme.colors.white,
          },
        }}
        dropDownStyle={{color: theme.colors.white, borderColor: 'red'}}
        dropDownItemStyle={{
          backgroundColor: theme.colors.white,
        }}
        dropDownItemTextStyle={{color: theme.colors.text}}
        dropDownItemSelectedStyle={{
          backgroundColor: theme.colors.primary,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DropDownList;
