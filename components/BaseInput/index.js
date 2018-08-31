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
  }
});

const BaseInput = (props) => {
  const { label, placeholder } = props;
  const { labelStyle, inputStyle } = styles;

  return (
    <View>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput
        placeholder={placeholder}
        style={inputStyle}
      />
    </View>
  );
};

export default BaseInput;
