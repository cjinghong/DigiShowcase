import React, {Component} from 'react';
import { 
	StyleSheet, 
	Text, 
	View,
	TextInput,
} from 'react-native';

export default class Field extends Component {

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={styles.textInputContainer}>
					<TextInput
						style={styles.textInput}
						onChangeText={this.props.onChange}
						value={this.props.value}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 16
	},
	title: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 21
	},
	textInputContainer: {
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: '#EAEAEA',
		borderRadius: 10,
	},
	textInput: {
		padding: 10,
		fontSize: 21,
		height: 40
	}
})