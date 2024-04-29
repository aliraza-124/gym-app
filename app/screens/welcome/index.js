import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import BackgroundImage from "../../components/backgroundImage";
import { Button, Checkbox, Text } from "react-native-paper";
import AppButton from "../../components/customButton";
import Heading from "../../components/heading";
import BackgroundIcon from "../../components/backgroundIcon";

export default function Welcome({ navigation }) {
  const [checked, setChecked] = React.useState(false);

  return (
    <ImageBackground
      source={require("../../../assets/images/welcome1.png")}
      style={styles.imgContainer}
    >
      <BackgroundIcon />
      <View style={styles.card}>
        <Text style={styles.heading}>Qoute of the day</Text>
        <Text style={styles.qoute}>
          “ What seems impossible today will one day become your warmup ”
        </Text>

        <View style={styles.checkbox}>
          <Checkbox.Item
            label="Don’t show this again"
            status={checked ? "checked" : "unchecked"}
            position="leading"
            color="#fff"
            uncheckedColor="#fff"
            labelStyle={{ color: "#fff" }}
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        {/* <Button
          mode={"contained"}
          buttonColor="white"
          textColor="red"
          style={styles.button}
          onPress={() => navigation.navigate("profile")}
        >
          Lets go!
        </Button> */}
        <View style={{ marginVertical: 20 }}>
          <AppButton
            title={"Lets go!"}
            variant={"outlined"}
            bgColor={"#fff"}
            onPress={() => navigation.navigate("tabs")}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 40,
  },
  card: {
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
  heading: {
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "600",
    fontStyle: "italic",
    color: "#fff",
    textAlign: "center",
    lineHeight: 78.5,
  },
  qoute: {
    fontSize: 29,
    fontFamily: "Roboto",
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    lineHeight: 37,
    // paddingVertical:20,
  },
  button: {
    width: 112,
    height: 40,
    borderRadius: 4,
    marginVertical: 20,
    borderColor: "#FA2D5E",
    // borderBlockColor: '#FA2D5E',
    borderWidth: 0.5,
    // borderStyle: "solid",
  },
  checkbox: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 4,
    borderStyle: "solid",
    borderColor: "#fff",
    marginVertical:20,
  },
});
