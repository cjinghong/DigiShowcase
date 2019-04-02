import React, {Component} from 'react';
import { 
	StyleSheet, 
	Text, 
	View,
	TouchableWithoutFeedback,
	Keyboard
} from 'react-native';
import {connect} from 'react-redux';
import Field from '../components/Field';
import BigButton from '../components/BigButton';

class LoginScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		}
	}

	onLoginPress = () => {
		const {email, password} = this.state;
		if (email.length === 0 || password.length === 0) {
			return
		}

		this.props.dispatch({
			type: 'LOGIN',
			email
		})
		if (this.props.navigation) {
			this.props.navigation.goBack();
		}
	}

  render() {
    return (
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
				<View style={styles.container}>
					<Text style={styles.title}>Login</Text>
					<View style={styles.loginFields}>
						<Field
							title='Email'
							value={this.state.email}
							onChange={(email) => {this.setState({email})}}
						/>
						<Field
							title='Password'
							secureTextEntry={true}
							value={this.state.password}
							onChange={(password) => {this.setState({password})}}
						/>
					</View>

					<View style={{
						flex: 1,
						justifyContent: 'flex-end',
						marginBottom: 20
					}}>
						<BigButton
							onPress={this.onLoginPress}
							title='Login'
						/>
					</View>
				</View>
			</TouchableWithoutFeedback>
    );
  }
}
export default connect()(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: '#4F6D7A',
		padding: 20,
		paddingTop: 70,
		paddingBottom: 30,
	},
	title: {
		fontSize: 40,
		color: 'white',
		fontWeight: 'bold',
		marginBottom: 16,
	},
	loginFields: {
		marginTop: 40,
	},
});