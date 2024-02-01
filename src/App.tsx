import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Earth } from './components/Earth';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Earth/>
    </div>
    </Provider>
  );
}

export default App;
