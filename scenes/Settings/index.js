import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import BrandButton from '../../components/BrandButton';
import BaseButton from '../../components/BaseButton';
import * as actionCreators from '../../actionCreators';


const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default SettingsScene = props => (
  <View style={{ paddingTop: 64, flex: 1, backgoundColor: '#000' }}>
    <View style={{ padding: 15, backgoundColor: '#000' }}>
      <BaseButton>
        Sign Out of Corvid
      </BaseButton>
    </View>

    <Text>
      Sign Out
    </Text>
    <Text>
      Delete Account
    </Text>
    <Text>
      Back
    </Text>
    <View style={styles.buttonContainer}>
      <BrandButton onPress={actionCreators.goBack}>
        Back
      </BrandButton>
    </View>
  </View>
);