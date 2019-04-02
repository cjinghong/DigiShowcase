import React, {Component} from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	Text,
} from 'react-native';


export default class BigButton extends Component {
	render() {
		return (
			<TouchableOpacity 
				style={styles.buttonContainer}
				onPress={this.props.onPress}
			>
				<Text style={styles.buttonText}>{this.props.title}</Text>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#E8DAB2',
		height: 75,
		borderRadius: 10,
		paddingLeft: 10,
		paddingRight: 10,
	},
	buttonText: {
		textAlign: 'center',
		color: '#4F6D7A',
		fontWeight: 'bold',
		fontSize: 20,
		lineHeight: 75,
	}
})