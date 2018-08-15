import React, {Component} from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View } from 'react-native';

import LoginScene from './scenes/Login';

const renderRouter = (showRouter) => {
  if (showRouter) {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginScene} title="Login"/>
        </Scene>
      </Router>
    );
  }

  return <LoginScene />;
};

class App extends Component {
  render() {
    return renderRouter(false);
  }
}


const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(App);