import React, {Component} from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	TouchableWithoutFeedback,
	Text,
	Animated,
	Easing,
} from 'react-native';


export default class BigButton extends Component {

	constructor(props) { 
		super(props);
		this.state = {
			animationTransformScale: new Animated.Value(1)
		};
	}	

	onPressIn = () => {
		Animated.timing(this.state.animationTransformScale, {
			toValue: 0.9,
			easing: Easing.in(),
			duration: 10,
		}).start();
	}

	onPressOut = () => {
		Animated.spring(this.state.animationTransformScale, {
			toValue: 1,
			easing: Easing.in(),
			duration: 400,
		}).start();
	}

	render() {
		const additionalContainerStyle = {
			transform: [
				{ scaleX: this.state.animationTransformScale },
				{ scaleY: this.state.animationTransformScale },
			]
		}

		return (
			<TouchableWithoutFeedback 
				onPress={this.props.onPress}
				onPressIn={this.onPressIn}
				onPressOut={this.onPressOut}
			>
				<Animated.View 
					style={[styles.buttonContainer, additionalContainerStyle]}
				>
					<Text style={styles.buttonText}>{this.props.title}</Text>
				</Animated.View>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: '#E8DAB2',
		height: 75,
		borderRadius: 10,
		paddingHorizontal: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#4F6D7A',
		fontWeight: 'bold',
		fontSize: 20,
		lineHeight: 75,
	}
})