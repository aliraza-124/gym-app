import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';
import theme from '../../theme';

const IconButton = ({icon, mode, title, onPress}) => {
  return (
    <>
      <Button
        icon={icon}
        mode={mode}
        onPress={onPress}
        buttonColor={theme.colors.primary}
        style={styles.styledIconButton}>
        {title}
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  styledIconButton: {
    borderRadius: 4,
    paddingHorizontal: 8,
  },
});

export default IconButton;
