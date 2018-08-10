import React from 'react';
import { View, Text } from 'react-native';

import { connect } from 'react-redux';

class App extends React.Component {

  render() {
    return (
      <View>

      </View>
    );
  }
}

mapStateToProps = state => {
  return { auth: state.auth }
};

export default connect(mapStateToProps)(App)
