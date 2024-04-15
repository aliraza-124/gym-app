import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { Avatar, Button, Modal, Portal, Text } from "react-native-paper";
import CustomButton from "../button";
import AppButton from "../customButton";
import TextField from "../textField";
import ModelTitle from "./modelTitle";

export default function Model({ iconUrl, onPress, visible, showModal, hideModal, title, btnTitle1, btnTitle2, description,  children}) {
  const containerStyle = { backgroundColor: "white", padding: 20 };
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={styles.container}
      >
        <View style={styles.content}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ModelTitle title={title} />
            <TouchableWithoutFeedback onPress={hideModal}>
              <Avatar.Image
                size={24}
                source={require("../../../assets/images/GroupClose.png")}
                style={{ backgroundColor: "transparent" }}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.icon}>
            <Avatar.Image
              size={79}
              source={iconUrl}
              style={{ backgroundColor: "transparent" }}
            />
          </View>
          <Text>
            {description}
          </Text>
          {children}
          {/* <TextField label={"Email"} placeholder={"abc@gamil.com"} /> */}
          {/* <CustomButton title={'Next'} mode={'contained'} style={{}}/> */}
          <View
            style={{ flexDirection: "row", justifyContent: "center", gap: 10 }}
          >
            <AppButton
              title={btnTitle1}
              varient={"contained"}
              onPress={onPress}
            />
            <AppButton
              title={btnTitle2}
              varient={"outlined"}
              onPress={hideModal}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 40,
  },
  content: {
    padding: 12,
    gap: 24,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});
