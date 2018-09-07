import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actionCreators';
import BrandButton from '../../components/BrandButton';
import BaseButton from '../../components/BaseButton';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
});

const PreviewScene = () => (
  <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#F7FAFF' }}>
    <View style={styles.buttonContainer}>
      <BaseButton>
        Cancel
      </BaseButton>
      <BrandButton style={{ marginTop: 15 }}>
        Send
      </BrandButton>
    </View>
  </View>
);

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScene);
