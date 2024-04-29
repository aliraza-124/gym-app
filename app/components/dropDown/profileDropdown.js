import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Avatar, Icon, Text, useTheme } from 'react-native-paper';
// import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
    { label: 'Edit Profile', value: '1', icon: 'cog-outline' },
    { label: 'Help', value: '2', icon: 'help-circle-outline' },
    { label: 'Gym Rules', value: '3', icon: 'clipboard-list-outline' },
    { label: 'Report an issue', value: '4', icon: 'camera' },
    { label: 'Logout', value: '4', icon: 'logout', color: 'red'},

  ];
export default function ProfileDropdown() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const theme = useTheme();
    const renderItem = item => {
        return (
          <View style={styles.item}>
              <Icon size={20} source={item.icon} color={item.color} />
            <Text style={[styles.textItem, item.color && { color:item.color}]}>{item.label}</Text>
          </View>
        );
      };
    return (
      <View style={styles.container}>

        <Dropdown
          style={[styles.dropdown, {borderColor:theme.colors.border}]}
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
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderItem={renderItem}
          renderLeftIcon={() => (
            <>
            <View style={{ padding: 0 }}>
                <Avatar.Image
                    size={32}
                    source={require("../../../assets/images/background.png")}
                    style={{ backgroundColor: "transparent" }}
                />
            </View>
            <View
            style={styles.profileDropdown}
            onPress={() => {
                console.log("profile dropdown");
            }}
            >
           
            <View
                style={{
                justifyContent: "center",
                alignItems: "flex-start",
                paddingHorizontal: 5,
                }}
            >
                <Text
                style={styles.title}
                >
                Khalid Sohaib
                </Text>
                <Text
                style={styles.subTitle}
                >
                Fitness Admin
                </Text>
            </View>
            </View>
            </>
          )}
          />
      </View>
    );
  };
  const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: 'gray',
        borderRadius:8,
        // padding: 1,
    },
    itemTextStyle:{
    //   backgroundColor: 'gray',
      color: '#000',

    },
    itemContainerStyle:{
        // backgroundColor: 'gray',
    //   padding: 4,

    },
    container: {
    //   backgroundColor: 'gray',
      padding: 16,
    },
    dropdown: {
      height: 50,
      borderColor: '#ffff',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    //   width:200,
      backgroundColor: '#ffffff',

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
    placeholderStyle: {
      fontSize: 16,
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
    //Header
    profileDropdown: {
        // backgroundColor: "#ffff",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 8,
        borderRadius: 6,
      },
    title: {
        fontSize: 12,
        fontWeight: 700,
        fontFamily: "Roboto",
        // lineHeight: 20,
      },
      subTitle:{
        fontSize: 10,
        fontWeight: 400,
        fontFamily: "Roboto",
        // lineHeight: 20,
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
  });