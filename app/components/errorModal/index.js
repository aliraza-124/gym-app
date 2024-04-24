import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';

const ErrorComponent = ({ message, onClose }) => {
    // console.log("Error componenet : ", message);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!message}
      onRequestClose={() => onClose()}
    >
      <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {Array.isArray(message) ? (
            message.map((msg, index) => (
                <Text key={index} style={styles.message}>{msg}</Text>
            ))
        ) : (
            <Text style={styles.message}>{message}</Text>
        )}
          <TouchableOpacity onPress={() => onClose()} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#ffcccc',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  message: {
    color: '#ff0000',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ErrorComponent;
