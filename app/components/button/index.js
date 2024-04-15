import {View, Text} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

const CustomButton = ({title, textColor, mode, onPress, style}) => {
  return (
    <View>
      <Button
        mode={mode}
        textColor={textColor}
        style={style}
        onPress={() => console.log({onPress})}>
        {title}
      </Button>
    </View>
  );
};

export default CustomButton;
