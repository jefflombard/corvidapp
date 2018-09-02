import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import CorvidNavBar from '../components/CorvidNavBar';

const renderRouterTest = outputComponent => (
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
);

export default renderRouterTest;
