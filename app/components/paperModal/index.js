import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {Portal, Modal, Text, Avatar} from 'react-native-paper';

import ModalTitle from './modalTitle';
import CustomButton from '../button';

const PaperModal = ({
  visible,
  nextModal,
  hideModal,
  title,
  iocnUrl,
  description,
  textPossiton,
  children,
  btnText1,
  btnText2,
  buttonsPossiton
}) => {
  const containerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
        style={styles.styledModal}>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ModalTitle title={title} />
            <TouchableWithoutFeedback onPress={hideModal}>
              <Avatar.Image
                size={26}
                source={require('../../../assets/icons/cross.png')}
              />
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.styledModalIcon}>
            {iocnUrl && <Avatar.Image size={70} source={iocnUrl} />}
          </View>

          <Text style={{textAlign: textPossiton ? textPossiton : 'center'}}>{description}</Text>
          <View style={{paddingVertical: 20, gap: 10}}>{children}</View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: buttonsPossiton ? buttonsPossiton : 'center',
              gap: 10,
            }}>
            <CustomButton
              title={btnText1}
              mode="contained"
              onPress={nextModal}
            />
            <CustomButton
              title={btnText2}
              mode="outlined"
              onPress={hideModal}
            />
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  styledModal: {
    width: '80%',
    marginHorizontal: '10%',
  },

  styledModalIcon: {
    paddingVertical: 24,
    alignItems: 'center',
  },
});

export default PaperModal;
