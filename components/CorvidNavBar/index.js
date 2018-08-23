import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actionCreators';


const styles = StyleSheet.create({
  container: {
    height: 64,
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 12,
  },
  title: {
    fontSize: 17,
    color: '#fff',
    position: 'absolute',
    bottom: 10,
    width: '50%',
    textAlign: 'center',
    left: '25%',
  },
  credits: {
    marginRight: 10,
    flexDirection: 'row',
  },
  creditText: {
    marginLeft: 10,
    color: '#fff',
  },
  settings: {
    marginLeft: 10,
  },
});

const CorvidNavBar = props => (
  <ImageBackground
    style={styles.container}
    source={require('./navbg.png')} // eslint-disable-line global-require
  >
    <TouchableOpacity style={styles.settings}>
      <Image source={require('./gear.png')} />
    </TouchableOpacity>
    <Text style={styles.title}>{props.title}</Text>
    <TouchableOpacity style={styles.credits}>
      <Image source={require('./envelope.png')} />
      <Text style={styles.creditText}>1</Text>
    </TouchableOpacity>
  </ImageBackground>
);

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CorvidNavBar);