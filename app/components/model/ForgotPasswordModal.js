import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Avatar, Modal, Portal, Text,  } from "react-native-paper";
import AppButton from "../customButton";

export default function Model({
  iconUrl,
  onPress,
  visible,
  hideModal,
  title,
  btnTitle1,
  btnTitle2,
  description,
  children
}) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableWithoutFeedback onPress={hideModal}>
              <Avatar.Icon size={24} icon="close" />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.icon}>
            <Avatar.Image size={79} source={iconUrl} />
          </View>
          <Text style={styles.description}>{description}</Text>
          {children}
          <View style={styles.buttonContainer}>
            <AppButton
              title={btnTitle1}
              variant="contained"
              onPress={onPress}
            />
            <AppButton
              title={btnTitle2}
              variant="outlined"
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
    backgroundColor: "white",
    margin: 20,
    padding: 20,
    borderRadius: 10,
  },
  content: {
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    marginBottom: 20,
  },
  description: {
    marginBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
