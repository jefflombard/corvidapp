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
const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
  },
  preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center'
 },
 settings: {
   position: 'absolute',
   top: 30,
   left: "5%",
   zIndex: 4,
 }
});

const PostcardPhotoScene = (props) => {
  const { actions } = props;
  return (
    <View style={{flex:1}}>
      <TouchableOpacity style={styles.settings} onPress={actions.openSettings}>
        <Image source={gear} />
      </TouchableOpacity>
      <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
      />

    </View>
  );
};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PostcardPhotoScene);
