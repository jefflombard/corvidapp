import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 25,
    paddingBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '100%',
  },
});

const BaseButton = (props) => {
  const { onPress, children, disabled } = props;
  return (
    <TouchableOpacity
      style={{ width: '100%', height: 45 }}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={{ fontSize: 15, color: '#990099' }}>
        {children.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default BaseButton;
