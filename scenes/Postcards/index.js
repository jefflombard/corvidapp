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

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    left: '5%',
  },
});

const PostcardScene = (props) => {
  const { actions } = props;
  return (
    <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#F7FAFF' }}>
      <Text>
        Login
      </Text>
      <View style={styles.buttonContainer}>
        <BrandButton onPress={actions.postcardPhoto}>
          New Postcard
        </BrandButton>
      </View>
    </View>
  );
};

const mapStateToProps = state => ({ ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(PostcardScene);
