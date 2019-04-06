import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import Menu from '../components/Menu';
import Field from '../components/Field';
import BigButton from '../components/BigButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class ContactScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      response: '',
    };
  }

  onSubmitPress = () => {
    const { name, job } = this.state;

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        job,
      }),
    })
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          response: JSON.stringify(responseJson),
        });
      });
  };

  render() {
    const { navigation } = this.props;
    const { name, job, response } = this.state;
    return (
      <Menu navigation={navigation}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            {/* Form */}
            <View>
              <Field
                title="Name"
                value={name}
                onChange={(txt) => {
                  this.setState({ name: txt });
                }}
              />
              <Field
                title="Job"
                value={job}
                onChange={(txt) => {
                  this.setState({ job: txt });
                }}
              />
            </View>

            {/* Results */}
            {response.length > 0 && (
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 21,
                    fontWeight: 'bold',
                  }}
                >
                  Results:
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 21,
                  }}
                >
                  {response}
                </Text>
              </View>
            )}

            {/* Submit button */}
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 20,
              }}
            >
              <BigButton onPress={this.onSubmitPress} title="Submit" />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Menu>
    );
  }
}
ContactScreen.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }).isRequired,
};

export default ContactScreen;
