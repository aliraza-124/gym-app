import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button, Icon} from 'react-native-paper';
import theme from '../../theme';

const IconButton = ({icon, title, onPress}) => {
  return (
    <>
      <Button
        icon={icon}
        mode="outlined"
        onPress={onPress}
        textColor={theme.colors.text}
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
