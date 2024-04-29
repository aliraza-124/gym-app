import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Avatar, Icon, Text, useTheme } from "react-native-paper";
import AppDropdown from "../dropDown/AppDropdown";
import { useUser } from "../../context/userContext";

const data = [
  { label: 'Edit Profile', value: '1', icon: 'cog-outline', screen: 'profile', },
  { label: 'Help', value: '2', icon: 'help-circle-outline', screen: 'home', },
  { label: 'Gym Rules', value: '3', icon: 'clipboard-list-outline' },
  { label: 'Report an issue', value: '4', icon: 'alert-outline' },
  { label: 'Logout', value: '4', icon: 'logout', color: 'red'},

];

export default function AppHeader({ navigation }) {
  const theme = useTheme();
  const { toggleLogin } = useUser();

  const handleSelect = (item) => {
    if (item.label === 'Logout') {
      toggleLogin();
      console.log('Perform logout action');
    } else {
      //  other menu item selections
      console.log('Selected:', item.label);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >

      <Avatar.Image
        size={62}
        source={require("../../../assets/images/logo-new.png")}
        style={styles.avatar}
      />
      <View style={styles.leftPanel}>
         <TouchableOpacity>
            <Icon size={28} source={"bell-badge"} color={theme.colors.border} />
         </TouchableOpacity>


        {/* <TouchableOpacity
          style={styles.profileDropdown}
          onPress={() => {
            console.log("profile dropdown");
          }}
        >
          <View style={{ padding: 5 }}>
              <Avatar.Image
                size={24}
                source={require("../../../assets/images/background.png")}
                style={{ backgroundColor: "transparent" }}
              />
          </View>
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
          <Icon size={20} source={"chevron-down"} />
        </TouchableOpacity> */}

        <AppDropdown
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
        </AppDropdown>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    backgroundColor: "transparent",
  },
  leftPanel: {
    flexDirection: "row",
    // gap: 0,
    alignItems: "center",
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
  subTitle: {
    fontSize: 10,
    fontWeight: 400,
    fontFamily: "Roboto",
    // lineHeight: 20,
  },
});
