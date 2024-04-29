import {} from 'react-native';
import React from 'react';
import {Checkbox} from 'react-native-paper';

import theme from '../../theme';

const CustomCheckbox = ({
  label,
  status,
  onChangeText,
  color,
  uncheckedColor,
  onPress,
  labelStyle,
}) => {
  return (
    <>
      <Checkbox.Item
        label={label}
        status={status ? 'checked' : 'unchecked'}
        position="leading"
        color={color}
        uncheckedColor={uncheckedColor}
        rippleColor="transparent"
        // onChangeText={() => onChangeText(!status)}
        // onChangeText={onChangeText}
        // onPress={onPress}
        // onPress={() => {onPress(!status)}}
        onPress={() => onPress(!status)}
        labelStyle={labelStyle}

      />
    </>
  );
};

export default CustomCheckbox;
