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
    marginTop: 25,
    paddingBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 44,
    width: '100%',
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
      <View style={{ width: '100%' }}>
        <ImageBackground
          style={styles.buttonContainer}
          source={buttonbg}
        >
          <Text style={{ fontSize: 15, color: '#FFF' }}>
            {children.toUpperCase()}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default BrandButton;
