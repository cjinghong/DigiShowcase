import React, {Component} from 'react';
import { 
	StyleSheet, 
  View,
	TouchableOpacity,
  Image,
  Text
} from 'react-native';
import Assets from '../../assets';

export default class Menu extends Component {

  onMenuPressed = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onMenuPressed}>
          <Image style={styles.menuImage} source={Assets.icons.menu}/>
        </TouchableOpacity>
        <Text style={styles.title}>
          {this.props.navigation ? this.props.navigation.state.routeName : ''}
        </Text>
        {this.props.children}
      </View>
    );
  }
}

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
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingBottom: 24,
  },
  menuImage: {
    width: 25,
    height: 25,
  }
});
