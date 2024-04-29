import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Checkbox, useTheme } from 'react-native-paper';

export default function AppCheckbox({label, value, onValueChange, color}) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      {/* <View style={styles.checkbox}> */}
        <Checkbox.Item
            label={label}
            status={value ? "checked" : "unchecked"}
            position="leading"
            color={color || theme.colors.primary}
            // uncheckedColor="#fff"
            labelStyle={styles.checkboxStyle}
            onPress={() => onValueChange(!value)}
            style={{  paddingLeft:0,  }}
        />
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // flex: 1,
    // alignSelf:'flex-start',
    // right:20,
    // backgroundColor: 'red',
    // textAlign:'right',
    alignItems:'flex-start',
    // paddingLeft:0,
    // marginLeft:0,
  },
  checkboxStyle: {
    // padding:0,
    // margin:0,
    // color: 'white',
  },
  checkbox: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: 'yellow',
    textAlign:'left',
    alignItems:'flex-start'
  },
})