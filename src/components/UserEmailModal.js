import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 16,
    marginTop: 70,
    // alignItems: 'flex-start',
    // justifyContent: 'space-between',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#4F6D7A',
  },
  content: {
    marginTop: 16,
    fontSize: 30,
    color: '#4F6D7A',
  },
  dismissText: {
    fontSize: 30,
    color: '#F6634A',
    textAlign: 'center',
    marginTop: 30,
  },
});

const UserEmailModal = ({
  modalVisible, title, content, setModalVisible,
}) => (
  <Modal animationType="slide" transparent={false} visible={modalVisible}>
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <Text style={styles.dismissText}>Hide</Text>
      </TouchableOpacity>
    </View>
  </Modal>
);
UserEmailModal.propTypes = {
  modalVisible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  setModalVisible: PropTypes.func,
};
UserEmailModal.defaultProps = {
  setModalVisible: () => {},
};

export default UserEmailModal;
