import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, AlertIOS } from 'react-native';
import { bindActionCreators } from 'redux';

import BrandButton from '../../components/BrandButton';
import BaseButton from '../../components/BaseButton';
import * as actionCreators from '../../actionCreators';


const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 25,
    alignItems: 'center',
    width: '90%',
    marginLeft: '5%',
  },
});

const deleteAlert = () => {
  AlertIOS.alert(
    'Please email accounts@getcorvid.com with a request to delete your account.',
  );
};

const SettingsScene = (props) => {
  const { actions } = props;
  return (
    <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#F7FAFF' }}>
      <View style={{
        padding: 0,
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%'
      }}>
        <View style={{ marginTop: 30 }}>
          <BaseButton onPress={actions.updateInfo}>
            Update Sender Info
          </BaseButton>
        </View>
        <View style={{ marginTop: 30 }}>
          <BaseButton onPress={actions.changePassword}>
            Change Password
          </BaseButton>
        </View>
        <View style={{ marginTop: 30 }}>
          <BaseButton onPress={deleteAlert}>
            Delete Account
          </BaseButton>
        </View>
        <View style={{ marginTop: 30 }}>
          <BaseButton onPress={actions.logout}>
            Sign Out
          </BaseButton>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <BrandButton onPress={actions.goHome}>
          Back
        </BrandButton>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScene);
