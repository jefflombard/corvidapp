import React, { Component } from 'react';
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
const photoGroup = require('./photoGroup.png');
const postcardGroup = require('./postcardGroup.png');

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
    top: 47.5,
    left: '5%',
    zIndex: 4,
  },
  buttonGroup: {
    position: 'absolute',
    right: '5%',
    top: 47.5,
    zIndex: 4,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  baseButtonGroup: {
    position: 'absolute',
    bottom: 30,
    paddingLeft: '10%',
    paddingRight: '10%',
    zIndex: 4,
    width: '100%',
    height: 100,
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

class PostcardPhotoScene extends Component {

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      console.log(data.uri);
    }
  };

  render() {
    const { actions, cameraUi } = this.props;
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
        <View style={styles.baseButtonGroup}>
          <TouchableOpacity
            style={{ width: 50 }}
            onPress={actions.goHome}
          >
            <Image source={postcardGroup} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={actions.goHome}
          >
            <View style={{
              height: 60,
              width: 60,
              borderRadius: 30,
              borderWidth: 3,
              borderColor: '#fff',
            }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 50 }}
            onPress={actions.goHome}
          >
            <Image source={photoGroup} />
          </TouchableOpacity>
        </View>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
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
  }
}

const mapStateToProps = state => ({ cameraUi: state.cameraUi });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PostcardPhotoScene);
