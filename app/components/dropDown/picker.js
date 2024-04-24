import { Picker } from '@react-native-picker/picker';
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { List, Text, TextInput, useTheme } from 'react-native-paper';

const GenderPicker = ({ value, onChange, error }) => {

    const theme = useTheme();
    const [listVisible, setListVisibel] = useState(false);
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => {
        setExpanded(!expanded);
        setListVisibel(true);
    };
   
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handlePress}>
            <TextInput
                mode='outlined'
                label={'Gender'}
                editable={false}
                value={value}
                onFocus={''}
                right={<TextInput.Icon icon={'chevron-down'} color={theme.colors.primary} />}
            />

        </TouchableOpacity>
       
        {listVisible && (
            <>
                <List.Item title="Male" />
                <List.Item title="Female" />
                <List.Item title="Other" />
            </>
        )}
        {/* <List.Section> */}
            {/* <List.Accordion
                // title="Controlled Accordion"
                // left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}> */}
                {/* <List.Item title="Male" />
                <List.Item title="Female" />
                <List.Item title="Other" /> */}
            {/* </List.Accordion> */}

            
        {/* </List.Section> */}
        {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 8,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});

export default GenderPicker;
