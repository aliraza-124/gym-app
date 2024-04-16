import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import theme from '../../theme';

const CustomButton = ({title, mode, onPress}) => {
  const buttonStyle = {
    backgroundColor: mode === 'contained' ? theme.colors.primary : 'none',
  };

  const textColor = mode === 'contained' ? 'white' : theme.colors.primary;

  return (
    <View>
      <Button
        mode={mode}
        style={[styles.styledButton, buttonStyle]}
        onPress={onPress}
        textColor={textColor}>
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  styledButton: {
    borderRadius: 4,
    paddingVertical: 3,
  },
});

export default CustomButton;
