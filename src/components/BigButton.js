import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableWithoutFeedback, Text, Animated, Easing,
} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#E8DAB2',
    height: 75,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#4F6D7A',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 75,
  },
});

export default class BigButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animationTransformScale: new Animated.Value(1),
    };
  }

  onPressIn = () => {
    const { animationTransformScale } = this.state;
    Animated.timing(animationTransformScale, {
      toValue: 0.9,
      easing: Easing.in(),
      duration: 10,
    }).start();
  };

  onPressOut = () => {
    const { animationTransformScale } = this.state;
    Animated.spring(animationTransformScale, {
      toValue: 1,
      easing: Easing.in(),
      duration: 400,
    }).start();
  };

  render() {
    const { animationTransformScale } = this.state;
    const { title, onPress } = this.props;
    const additionalContainerStyle = {
      transform: [{ scaleX: animationTransformScale }, { scaleY: animationTransformScale }],
    };

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        onPressIn={this.onPressIn}
        onPressOut={this.onPressOut}
      >
        <Animated.View style={[styles.buttonContainer, additionalContainerStyle]}>
          <Text style={styles.buttonText}>{title}</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

BigButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
