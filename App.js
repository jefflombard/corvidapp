import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';

import LoginScene from './scenes/Login';

const renderRouter = (showRouter) => {
  if (showRouter) {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginScene} title="Login" />
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

const App = (props) => {
  const { ui, auth } = props;
  return (
    <View style={{ flex: 1 }}>
      {renderActivityIndicator(ui.loading)}
      {renderRouter(auth.user)}
    </View>
  );
};

const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });

export default connect(mapStateToProps)(App);
