import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Icon, Text, useTheme } from 'react-native-paper';

export default function AppDropdown({ data, onSelect, navigation, children }) {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const theme = useTheme();

  const handleMenuItemPress = (item) => {
    setValue(item.value);
    setIsFocus(false);
    onSelect(item);

    // if navigation function is provided and navigate accordingly
    if (navigation && item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item} onTouchStart={() => handleMenuItemPress(item)}>
        <Icon size={20} source={item.icon} color={item.color} />
        <Text style={[styles.textItem, item.color && { color: item.color }]}>
          {item.label}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, { borderColor: theme.colors.border }]}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        data={data}
        mode='default'
        containerStyle={styles.containerStyle}
        fontFamily='Roboto'
        activeColor='red'
        labelField="label"
        valueField="value"
        itemTextStyle={styles.itemTextStyle}
        itemContainerStyle={styles.itemContainerStyle}
        placeholder={!isFocus ? 'Select item' : '...'}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => setValue(item.value)}
        renderItem={renderItem}
          renderLeftIcon={() => (
            <>
              {children}  
            </>
          )}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //   backgroundColor: 'gray',
      padding: 16,
    },
  containerStyle:{
    // backgroundColor: 'gray',
    borderRadius:8,
    padding: 10,
},
dropdown: {
  height: 50,
  borderColor: '#ffff',
  // borderWidth: 0.5,
  borderRadius: 8,
  paddingHorizontal: 8,
//   width:200,
  backgroundColor: '#ffffff',

},
item: {
  flexDirection: 'row',
  justifyContent:'flex-start',
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingVertical: 10,
  gap:10,
  backgroundColor: 'white',
},
textItem: {
  fontSize: 14,
  fontWeight: 700,
  fontFamily: "Roboto",
  lineHeight: 20,
  color: '#333333'
},
icon: {
  marginRight: 5,

},
label: {
  //   position: 'absolute',
    backgroundColor: 'red',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  selectedTextStyle: {
    fontSize: 16,
    display:'none'
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
