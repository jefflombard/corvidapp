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
    justifyContent: 'center',
    width: '100%',
  },
});

const UpdateInfoScene = (props) => {
  const { actions } = props;
  return (
    <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#F7FAFF' }}>
    </View>
  )};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(UpdateInfoScene);
