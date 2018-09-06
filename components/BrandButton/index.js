import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const buttonbg = require('./buttonbg.png');

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    backgroundColor: '#990099',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'center',
    height: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

const BrandButton = (props) => {
  const {
    onPress,
    children,
    disabled,
    style,
  } = props;
  return (
    <TouchableOpacity style={[{ width: '100%' }, style]} onPress={onPress} disabled={disabled}>
      <View style={styles.buttonContainer}>
        <Text style={{ fontSize: 15, color: '#FFF' }}>
          {children.toUpperCase()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BrandButton;
