import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
    marginTop: 5,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
  },
  textInput: {
    color: '#FFFFFF',
    marginLeft: 5,
    fontSize: 17,
    marginTop: 5,
    marginBottom: 5,
  },
});

const CorvidTextInput = (props) => {
  const { placeholder, secureTextEntry = false, onChangeText } = props;
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#DBDBDB"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CorvidTextInput;
