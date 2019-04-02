import React, {Component} from 'react';
import { 
	StyleSheet, 
	Text, 
  View,
  Modal,
  TouchableHighlight,
} from 'react-native';
import Menu from '../components/Menu';
import {connect} from 'react-redux';
import BigButton from '../components/BigButton';
import UserEmailModal from '../components/UserEmailModal';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userEmailModalVisible: false
    }
  }

  componentDidMount() {
    // If user DOES not exist, show login screenn
    if (!this.props.user.email) {
      const {navigation} = this.props;
      if (navigation) {
        // TODO: - 
        // navigation.navigate('Login');
      }
    }
  }

  setUserEmailModalVisible = (visible) => {
    this.setState({
      userEmailModalVisible: visible
    })
  }

  render() {
    const modalTitle = 'Hello,\nYou are logged in as';
    const email = 'jinghongchan@gmail.com'//this.props.user.email ? this.props.user.email : '';
    return (
      <Menu navigation={this.props.navigation}>
        <View style={styles.container}>

          <UserEmailModal
            modalVisible={this.state.userEmailModalVisible}
            title={modalTitle}
            content={email}
            setModalVisible={this.setUserEmailModalVisible}
          />
          <BigButton
            onPress={() => {this.setUserEmailModalVisible(true)}}
            title='Show User Email'
          />
        </View>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
	}
}
export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
