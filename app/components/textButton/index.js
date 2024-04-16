import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import theme from '../../theme';

const TextButton = ({title, textColor, onPress, align, underline}) => {
  const textButtonStyle = {
    alignItems: align === 'center' ? 'center' : 'flex-end',
    // Color: textColor === theme.colors.text ? theme.colors.text : theme.colors.primary,
  };

  const _textColor = textColor === theme.colors.text ? theme.colors.text : theme.colors.primary;

  return (
    <View>
      <Button
        mode="text"
        textColor={_textColor}
        style={[styles.styledTextButton, textButtonStyle]}
        onPress={onPress}>
        {title}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  styledTextButton: {},
});

export default TextButton;
