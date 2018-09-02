import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import CorvidNavBar from '../components/CorvidNavBar';
import AddressScene from '../scenes/FromAddress';

const renderRouterTest = (showRouter) => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="postcards"
          component={AddressScene}
          title="Address"
          navBar={CorvidNavBar}
        />
      </Scene>
    </Router>
  )
};

export default renderRouterTest;
