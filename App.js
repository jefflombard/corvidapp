import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View } from 'react-native';

import LoginScene from './scenes/Login';

const App = () => (
  <View>
    <Router>
      <Scene key="root">
        <Scene key="login" component={LoginScene} title="Login"/>
      </Scene>
    </Router>
  </View>
);

export default App;