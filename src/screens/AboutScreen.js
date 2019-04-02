import React, {Component} from 'react';
import { 
	StyleSheet, 
	Text, 
	View,
} from 'react-native';
import Menu from '../components/Menu';

export default class AboutScreen extends Component {
  render() {
    return (
      <Menu navigation={this.props.navigation}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Lorem ipsum dolor sit amet.
          </Text>
          <Text style={styles.body}>
            Consectetur adipiscing elit. Cras id condimentum tortor. Nam viverra, dolor in facilisis venenatis, eros ligula semper risus, quis congue est leo eget diam. Fusce suscipit ipsum in aliquam eleifend. Donec suscipit, leo in gravida sodales, leo ante lacinia elit, non egestas nunc nisl vitae ligula. Phasellus eu condimentum ipsum. Morbi blandit ante lectus, et tempor justo sodales eget. Proin quis ipsum eu elit tempus tempus eu vitae risus. Aliquam sagittis lorem diam, sit amet elementum lorem dignissim in. 
          </Text>
        </View>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 8,
    paddingBottom: 16,
  },
  body: {
    color: 'white',
    fontSize: 16
  }
});
