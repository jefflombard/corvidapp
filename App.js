import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import { bindActionCreators } from 'redux';

import LoginScene from './scenes/Login';
import PostcardScene from './scenes/Postcards';
import SettingsScene from './scenes/Settings';
import CorvidNavBar from './components/CorvidNavBar';
import UpdateInfoScene from './scenes/UpdateInfo';
import PreviewScene from './scenes/Preview';
import * as actionCreators from './actionCreators';

// For Testing Only
import renderRouterTest from './utilities/routerTest.js';

const renderRouter = (showRouter) => {
  if (showRouter) {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="postcards"
            component={PostcardScene}
            title="Sent Postcards"
            navBar={CorvidNavBar}
          />
          <Scene
            key="settings"
            component={SettingsScene}
            title="Settings"
            navBar={CorvidNavBar}
          />
          <Scene
            key="updateInfo"
            component={UpdateInfoScene}
            title="Update Info"
            navBar={CorvidNavBar}
          />
          <Scene
            key="preview"
            component={PreviewScene}
            title="Preview"
            navBar={CorvidNavBar}
          />
        </Scene>
      </Router>
    );
  }

  return <LoginScene />;
};

const renderActivityIndicator = (showActivityIndicator) => {
  if (showActivityIndicator) {
    return (
      <View style={{
        height: '100%',
        width: '100%',
        zIndex: 3,
        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <ActivityIndicator size="large" color="#990099" />
      </View>
    );
  }
  return <View />;
};

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.checkAuthPersistance();
  }

  render() {
    const { ui, auth } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        {renderActivityIndicator(ui.loading)}
        {renderRouterTest(auth.user)}
      </View>
    );
  }
}
// {renderRouter(auth.user)} for Testing


const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
