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
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: 25,
  },
});

const AddressScene = (props) => {
  const { actions } = props;
  return (
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
          onChangeText={actions.fromUpdateName}
        />
        <BaseInput
          label="Address"
          placeholder="Enter your address"
          onChangeText={actions.fromUpdateAddress}
        />
        <BaseInput
          label="Second Address"
          placeholder="Enter your Second Address (optional)"
          onChangeText={actions.fromUpdateAddress2}
        />
        <BaseInput
          label="City"
          placeholder="Enter your City"
          onChangeText={actions.fromUpdateCity}
        />
        <BaseInput
          label="State"
          placeholder="Enter your State"
          onChangeText={actions.fromUpdateState}
        />
        <ZipInput
          label="ZIP"
          placeholder="Enter your ZIP here"
          onChangeText={actions.fromUpdateZip}
        />
      </ScrollView>
      <BrandButton
        style={[{ marginBottom: 25, marginTop: 10 }, styles.container]}
        onPress={actions.saveFromAddress}
      >
        Save
      </BrandButton>
    </View>
  );
};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AddressScene);
