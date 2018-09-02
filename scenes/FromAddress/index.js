import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actionCreators';
import BaseInput from '../../components/BaseInput';
import BrandButton from '../../components/BrandButton';
import ZipInput from '../../components/ZipInput';

const styles = StyleSheet.create({
  messageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'relative',
  },
  text: {
    marginTop: 15,
    marginBottom: 20,
    fontSize: 17,
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 25,
  },
});

const AddressScene = () => (
  <View style={{
    paddingTop: 64,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F7FAFF',
  }}
  >
    <ScrollView style={styles.container}>
      <Text style={styles.messageTitle}>
        Set your sender information
      </Text>
      <Text style={styles.text}>
        We need a from address so your friends can write you back!
      </Text>
      <BaseInput
        label="Name"
        placeholder="Enter your name here"
      />
      <BaseInput
        label="Address"
        placeholder="Enter your address"
      />
      <BaseInput
        label="Second Address"
        placeholder="Enter your Second Address (optional)"
      />
      <BaseInput
        label="City"
        placeholder="Enter your City"
      />
      <BaseInput
        label="State"
        placeholder="Enter your State"
      />
      <ZipInput
        label="ZIP"
        placeholder="Enter your ZIP here"
      />
    </ScrollView>
    <BrandButton style={{ marginBottom: 20 }}>
      Save
    </BrandButton>
  </View>
);

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AddressScene);
