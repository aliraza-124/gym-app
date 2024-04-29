import { StyleSheet } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import React from 'react'

export default function AppButton({ title, variant, onPress, icon, bgColor }) {
  const theme = useTheme();
  const buttonStyle = {
    backgroundColor:
      variant === 'contained' ? theme.colors.primary : bgColor ? bgColor : 'none',
  };

  const textColor = variant === 'contained' ? 'white' : theme.colors.primary;
  const rippleColor =
    variant === 'outlined' ? 'transparent' : theme.colors.primary;
    
  return (
    // <Button
    //   icon={icon}
    //   mode={variant}
    //   style={[styledButton, styles.button]}
    //   onPress={onPress}
    //   textColor={ bgColor ? '#FA2D5E' : '#fff' }
    //   // textColor={'#FA2D5E'}
    // >
    //   {title}
    // </Button>

    <Button
      icon={icon}
      mode={variant}
      style={[buttonStyle, {textColor:textColor}, styles.button]}
      // style={[styles.button, {  backgroundColor, color: textColor }]}
      onPress={onPress}
    
    >
      {title}
    </Button>
  );
}

const styles = StyleSheet.create({
    button : {
        borderRadius:4,
        // height: 40,
        borderColor:'#FA2D5E',
        textAlign: 'center',
        lineHeight: 17,
        borderWidth: 0.5,
      

    }
})