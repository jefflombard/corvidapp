import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import CorvidNavBar from '../components/CorvidNavBar';

const renderRouterTest = (outputComponent) => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="postcards"
          component={outputComponent}
          title="Address"
          navBar={CorvidNavBar}
        />
      </Scene>
    </Router>
  )
};

export default renderRouterTest;
