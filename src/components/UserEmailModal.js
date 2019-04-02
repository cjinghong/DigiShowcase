import React, {Component} from 'react';
import {
	Modal,
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
} from 'react-native';

export default class UserEmailModal extends Component {
  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.container}>
					<Text style={styles.title}>{this.props.title}</Text>
					<Text style={styles.content}>{this.props.content}</Text>

					<TouchableOpacity
						onPress={() => {
							this.props.setModalVisible(!this.props.modalVisible);
						}}>
						<Text style={styles.dismissText}>Hide</Text>
					</TouchableOpacity>
        </View>
      </Modal>
    )
  }
}

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
	}
})