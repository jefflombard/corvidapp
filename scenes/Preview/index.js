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
    paddingBottom: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

const PreviewScene = () => (
  <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#F7FAFF' }}>
    <Text>
      Preview
    </Text>
    <View style={{ width: 310 }}>
      <BaseButton>
        Placeholder
      </BaseButton>
    </View>
    <View style={styles.buttonContainer}>
      <View style={{ width: 310 }}>
        <BaseButton>
          Back to All Postcards
        </BaseButton>
      </View>
      <BrandButton>
        Send
      </BrandButton>
    </View>
  </View>
);

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PreviewScene);
