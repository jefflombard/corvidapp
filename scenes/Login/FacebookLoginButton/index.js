import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    height: 45,
    width: 285,
  },
});

const logo = require('./facebookLogo.png');

const FacbookLoginButton = (props) => {
  const { onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={logo} />
      </View>
    </TouchableOpacity>
  );
};

export default FacbookLoginButton;
