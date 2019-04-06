import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert,
} from 'react-native';
import { connect } from 'react-redux';
import Field from '../components/Field';
import BigButton from '../components/BigButton';
import { loginUser } from '../actions';

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

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onLoginPress = () => {
    const { email, password } = this.state;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.length === 0 || password.length === 0) {
      this.alertFieldsEmpty();
      return;
    }
    if (!re.test(email.toLowerCase())) {
      this.alertInvalidEmail();
      return;
    }
    const { login, navigation } = this.props;
    login(email);
    navigation.goBack();
  };

  alertFieldsEmpty = () => {
    Alert.alert(
      'Empty fields',
      'Email and password cannot be empty',
      [{ text: 'OK', onPress: () => {} }],
      { cancelable: false },
    );
  };

  alertInvalidEmail = () => {
    Alert.alert('Invalid email', 'Must be a valid email', [{ text: 'OK', onPress: () => {} }], {
      cancelable: false,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.loginFields}>
            <Field
              title="Email"
              value={email}
              onChange={(text) => {
                this.setState({ email: text });
              }}
            />
            <Field
              title="Password"
              secureTextEntry
              value={password}
              onChange={(text) => {
                this.setState({ password: text });
              }}
            />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 20,
            }}
          >
            <BigButton onPress={this.onLoginPress} title="Login" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email) => {
    dispatch(loginUser(email));
  },
});

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }).isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(LoginScreen);
