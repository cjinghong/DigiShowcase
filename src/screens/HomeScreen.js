import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import BigButton from '../components/BigButton';
import UserEmailModal from '../components/UserEmailModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmailModalVisible: false,
    };
  }

  componentDidMount() {
    const { user, navigation } = this.props;
    // If user DOES not exist, show login screenn
    if (!user) {
      if (navigation) {
        navigation.navigate('Login');
      }
    }
  }

  setUserEmailModalVisible = (visible) => {
    this.setState({
      userEmailModalVisible: visible,
    });
  };

  render() {
    const { user, navigation } = this.props;
    const { userEmailModalVisible } = this.state;

    const modalTitle = 'Hello,\nYou are logged in as';
    const email = user ? user.email : '';

    return (
      <Menu navigation={navigation}>
        <View style={styles.container}>
          <UserEmailModal
            modalVisible={userEmailModalVisible}
            title={modalTitle}
            content={email}
            setModalVisible={this.setUserEmailModalVisible}
          />
          <BigButton
            onPress={() => {
              this.setUserEmailModalVisible(true);
            }}
            title="Show User Email"
          />
        </View>
      </Menu>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

HomeScreen.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
  }),
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }).isRequired,
};

HomeScreen.defaultProps = {
  user: null,
};

export default connect(mapStateToProps)(HomeScreen);
