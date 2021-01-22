import React from 'react';
import { registerRootComponent } from 'expo';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/Redux/reducers';
import Route from './src/config/route';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const App = () => (
  <Provider store={store}>
    <Route />
  </Provider>
)
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
