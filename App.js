import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';

import LoginScene from './scenes/Login';
import PostcardScene from './scenes/Postcards';
import * as actionCreators from './actionCreators';

const renderRouter = (showRouter) => {
  if (showRouter) {
    return (
      <Router>
        <Scene key="root">
          <Scene key="Postcards" component={PostcardScene} title="Sent Postcards" />
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
        {renderActivityIndicator(ui.loading)}
        {renderRouter(auth.user)}
      </View>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth, ui: state.ui });
const mapDispatchToProps = dispatch => ({ actions: bindActionCreators(actionCreators, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(App);
