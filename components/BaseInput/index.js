import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 13,
  },
  inputStyle: {
    fontSize: 17,
    marginTop: 10,
    marginBottom: 10,
  },
  containerStyle: {
    marginTop: 25,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },
});

const BaseInput = (props) => {
  const { label, placeholder, onChangeText } = props;
  const { labelStyle, inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default BaseInput;
