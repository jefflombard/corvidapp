import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actionCreators';
import BaseInput from '../../components/BaseInput';

const styles = StyleSheet.create({
  messageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'relative',
  },
  text: {
    marginTop: 15,
    marginBottom: 0,
  },
  container: {
    marginLeft: 15,
    marginRight: 15,
  },
});

const AddressScene = (props) => {
  const {
    message,
    messageTitle,
  } = props;
  return (
    <View style={{ paddingTop: 64,
                   flex: 1,
                   flexDirection: 'column',
                   backgroundColor: '#F7FAFF',
                }}>
      <BaseInput label="Example Label" placeholder="Example Placeholder"/>
    </View>
  );
};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(AddressScene);