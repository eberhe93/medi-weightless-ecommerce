import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store';
import routes from '../src/modules/routes';
import {Api} from './modules/api';

class App extends Component {
  render(){
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </Provider>
  );
}
}

export default App;
