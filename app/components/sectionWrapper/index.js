import {View, StyleSheet} from 'react-native';
import React from 'react';

import theme from '../../theme';
import {Text} from 'react-native-paper';

const SectionWrapper = ({title, description, children}) => {
  return (
    <View style={styles.styledSection}>
      {title && <Text style={styles.styledTitle}>{title}</Text>}
      {description && (
        <Text style={styles.styledDescription}>{description}</Text>
      )}

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  styledSection: {
    paddingHorizontal: 14,
    paddingVertical: 20,
    backgroundColor: theme.colors.background,
    borderRadius: 10,
    gap: 14,
  },

  styledTitle: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'left',
  },

  styledDescription: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'left',
  },
});

export default SectionWrapper;
