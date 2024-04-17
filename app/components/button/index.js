import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import theme from '../../theme';

const CustomButton = ({title, mode, onPress}) => {
  const buttonStyle = {
    backgroundColor: mode === 'contained' ? theme.colors.primary : 'none',
  };

  const textColor = mode === 'contained' ? 'white' : theme.colors.primary;
  const rippleColor = mode === 'outlined' ? 'transparent' : theme.colors.primary;

  return (
    <View>
      <Button
        mode={mode}
        style={[styles.styledButton, buttonStyle]}
        onPress={onPress}
        textColor={textColor}
        rippleColor={rippleColor}>
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  styledButton: {
    borderRadius: 4,
    paddingVertical: 3,
    borderColor: theme.colors.primary,
  },
});

export default CustomButton;
