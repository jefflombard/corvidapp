import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../../actionCreators';
import BrandButton from '../../components/BrandButton';
import BaseButton from '../../components/BaseButton';

const placeholderImage = require('./placeholder.png');

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
  contentContainer: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
  },
  sectionText: {
    color: '#212224',
    fontSize: 13,
    marginBottom: 20,
    marginTop: 20,
  },
  placeholder: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    height: 200,
    overflow: 'hidden',
    resizeMode: 'contain',
  },
  placeholderContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textContainer: {
    paddingLeft: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

const NewPostcardScene = () => (
  <View style={{ paddingTop: 64, flex: 1, backgroundColor: '#F7FAFF' }}>
    <ScrollView style={styles.contentContainer}>
      <View>
        <Text style={styles.sectionText}>
          PHOTO
        </Text>
        <TouchableOpacity style={styles.placeholderContainer}>
          <Image
            source={placeholderImage}
            style={styles.placeholder}
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.sectionText}>
          SEND TO
        </Text>
        <TouchableOpacity
          style={[
            styles.placeholderContainer,
            styles.textContainer,
            { height: 45 }]
          }
        >
          <Text style={{ fontSize: 17 }}>
            Set Send To Address
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.sectionText}>
          MESSAGE
        </Text>
        <TouchableOpacity
          style={[
            styles.placeholderContainer,
            styles.textContainer,
            { height: 45 }]
          }
        >
          <Text style={{ fontSize: 17 }}>
            Write a message...
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPostcardScene);
