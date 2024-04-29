import { StyleSheet,View } from 'react-native'
import React from 'react'
import { Avatar, Text } from 'react-native-paper'
import AppDropdown from '../../components/dropDown/AppDropdown'


const data = [
  { label: 'Edit Profile', value: '1', icon: 'cog-outline', screen: 'profile', },
  { label: 'Help', value: '2', icon: 'help-circle-outline', screen: 'home', },
  { label: 'Gym Rules', value: '3', icon: 'clipboard-list-outline' },
  { label: 'Report an issue', value: '4', icon: 'alert-outline' },
  { label: 'Logout', value: '4', icon: 'logout', color: 'red'},

];

export default function BookPersonalTrainer({navigation}) {
  const handleSelect = (item) => {
    if (item.label === 'Logout') {
      // Perform logout action here
      console.log('Perform logout action');
    } else {
      // Handle other menu item selections
      console.log('Selected:', item.label);
    }
  };
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <Text style={styles.text} >Book a Personal Trainer-Screen</Text>
      {/* Testing dropdown */}

      {/* <AppDropdown
        data={data}
        onSelect={(item)=>handleSelect(item)}
        navigation={navigation}
      >
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
      </AppDropdown> */}
    </View>
  )
}

const styles = StyleSheet.create({
  text : {
    fontWeight : 700,
    fontSize : 20,
    color:'#FA2D5E',
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


});