import React, {Component} from 'react';
import { 
	StyleSheet, 
	Text, 
	View,
} from 'react-native';
import Menu from '../components/Menu';

export default class ContactScreen extends Component {
  render() {
    return (
      <Menu navigation={this.props.navigation}>
        <View style={styles.container}>
          <Text>CONTACT</Text>
        </View>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
