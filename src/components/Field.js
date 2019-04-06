import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
  },
  textInputContainer: {
    marginVertical: 10,
    backgroundColor: '#EAEAEA',
    borderRadius: 10,
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 21,
    height: 40,
  },
});

const Field = ({
  title, value, secureTextEntry, onChange,
}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.textInputContainer}>
      <TextInput
        secureTextEntry={secureTextEntry || false}
        style={styles.textInput}
        onChangeText={onChange}
        value={value}
      />
    </View>
  </View>
);

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
Field.defaultProps = {
  secureTextEntry: false,
};

export default Field;
