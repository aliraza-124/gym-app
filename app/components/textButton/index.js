import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import theme from '../../theme';

const TextButton = ({title, textColor, onPress, align, underline}) => {
  const textButtonStyle = {
    alignItems: align === 'center' ? 'center' : 'flex-end',
  };

  const _textColor =
    textColor === theme.colors.text ? theme.colors.text : theme.colors.primary;

  return (
    <View>
      <Button
        mode="text"
        rippleColor="transparent"
        style={textButtonStyle}
        onPress={onPress}>
        <Text style={[{textDecorationLine: underline ? 'underline' : 'none'}, { color: _textColor }]}>
          {title}
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default TextButton;
