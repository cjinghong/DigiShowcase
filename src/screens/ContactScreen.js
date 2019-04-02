import React, {Component} from 'react';
import { 
	StyleSheet, 
	Text, 
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Menu from '../components/Menu';
import Field from '../components/Field';
import BigButton from '../components/BigButton';

export default class ContactScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job: '',
      response: ''
    }
  }

  onSubmitPress = () => {
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        job: this.state.job,
      }),
    })
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        response: JSON.stringify(responseJson)
      });
    })
  }

  render() {
    return (
      <Menu navigation={this.props.navigation}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
          
            {/* Form */}
            <View>
              <Field
                title='Name'
                value={this.state.name}
                onChange={(name) => {this.setState({name})}}
              />
              <Field
                title='Job'
                value={this.state.job}
                onChange={(job) => {this.setState({job})}}
              />
            </View>

            {/* Results */}
            {
              this.state.response.length > 0 &&
              <View>
                <Text style={{
                  color: 'white',
                  fontSize: 21,
                  fontWeight: 'bold',
                }}>
                  Results:
                </Text>
                <Text style={{
                  color: 'white',
                  fontSize: 21
                }}>
                  {this.state.response}
                </Text>
              </View>
            }

            {/* Submit button */}
            <View style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginBottom: 20
            }}>
              <BigButton
                onPress={this.onSubmitPress}
                title='Submit'
              />
            </View>

          </View>
        </TouchableWithoutFeedback>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
