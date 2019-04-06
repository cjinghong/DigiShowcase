import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, TouchableOpacity, Image, Text,
} from 'react-native';
import Assets from '../../assets';

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
  },
});

const Menu = ({ navigation, children }) => {
  const onMenuPressed = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMenuPressed}>
        <Image style={styles.menuImage} source={Assets.icons.menu} />
      </TouchableOpacity>
      <Text style={styles.title}>{navigation.state.routeName}</Text>
      {children && children}
    </View>
  );
};
Menu.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }).isRequired,
  children: PropTypes.element,
};
Menu.defaultProps = {
  children: null,
};

export default Menu;
