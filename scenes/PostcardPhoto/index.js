import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RNCamera } from 'react-native-camera';

import * as actionCreators from '../../actionCreators';

const gear = require('../../components/CorvidNavBar/gear.png');
const flip = require('./flip.png');
const flashOn = require('./flashOn.png');
const flashOff = require('./flashOff.png');

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  settings: {
    position: 'absolute',
    top: 30,
    left: '5%',
    zIndex: 4,
  },
  buttonGroup: {
    position: 'absolute',
    right: '5%',
    top: 30,
    zIndex: 4,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const renderFlash = (isFlash, action) => {
  if (isFlash) {
    return (
      <TouchableOpacity
        onPress={action}
      >
        <Image source={flashOn} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPress={action}
    >
      <Image source={flashOff} />
    </TouchableOpacity>
  );
};

const PostcardPhotoScene = (props) => {
  const { actions, cameraUi } = props;
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.settings} onPress={actions.openSettings}>
        <Image source={gear} />
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        {renderFlash(cameraUi.flash, actions.toggleFlash)}
        <TouchableOpacity
          onPress={actions.toggleDirection}
        >
          <Image source={flip} />
        </TouchableOpacity>
      </View>
      <RNCamera
        style={styles.preview}
        flashMode={
          cameraUi.flash
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        type={
          cameraUi.front
            ? RNCamera.Constants.Type.front
            : RNCamera.Constants.Type.back
          }
        permissionDialogTitle="Permission to use camera"
        permissionDialogMessage="We need your permission to use your camera phone"
      />

    </View>
  );
};

const mapStateToProps = state => ({ cameraUi: state.cameraUi });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PostcardPhotoScene);
