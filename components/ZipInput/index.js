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

const ZipInput = (props) => {
  const { onChangeText } = props;
  const { labelStyle, inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        ZIP Code
      </Text>
      <TextInput
        placeholder="Enter your ZIP here"
        style={inputStyle}
        onChangeText={onChangeText}
        keyboardType="numeric"
        maxLength={5}
      />
    </View>
  );
};

export default ZipInput;
