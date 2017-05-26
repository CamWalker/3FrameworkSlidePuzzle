import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers/index';

import './App.css';
import Board from './containers/Board';

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Board />
      </Provider>
    );
  }
}

export default App;
