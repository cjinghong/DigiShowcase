import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './src/components/AppContainer';
import store from './src/store';

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
export default App;
