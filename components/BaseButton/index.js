import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
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
  button: {
    width: '90%',
    height: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '5%',
    marginRight: '5%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

const BaseButton = (props) => {
  const { onPress, children, disabled } = props;
  return (
    <TouchableOpacity
      style={styles.button}
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
