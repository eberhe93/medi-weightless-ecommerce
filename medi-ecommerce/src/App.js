import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ListViewScreen from './screens/ListViewScreen/ListViewScreen';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch } from'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Navbar />
        <ListViewScreen />
        App Home
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
