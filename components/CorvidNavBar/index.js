import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actionCreators';

const styles = StyleSheet.create({
  container: {
    height: 80,
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
    height: 20,
    alignItems: 'center',
  },
  credits: {
    marginRight: 10,
    flexDirection: 'row',
    height: 20,
    alignItems: 'center',
  },
  creditText: {
    marginLeft: 10,
    color: '#fff',
  },
  settings: {
    marginLeft: '5%',
    height: 20,
    alignItems: 'center',
  },
});
const gear = require('./gear.png');
const envelope = require('./envelope.png');

const CorvidNavBar = (props) => {
  const { title, actions } = props;

  return (
    <ImageBackground
      style={styles.container}
      source={require('./navbg.png')} // eslint-disable-line global-require
    >
      <TouchableOpacity style={styles.settings} onPress={actions.openSettings}>
        <Image source={gear} />
      </TouchableOpacity>
      <Text style={styles.title}>
        {title}
      </Text>
      <TouchableOpacity style={styles.credits}>
        <Image source={envelope} />
        <Text style={styles.creditText}>
          10
        </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(CorvidNavBar);
