import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RNCamera } from 'react-native-camera';

import * as actionCreators from '../../actionCreators';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
  },
});

const PostcardPhotoScene = (props) => {
  const { actions } = props;
  return (
    <View style={{flex:1}}>
      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
      />
    </View>
  );
};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PostcardPhotoScene);
