import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ListViewScreen from './screens/ListViewScreen/ListViewScreen';
import { Provider } from 'react-redux';
import store from './store';
import { withRouter } from 'react-router';
import routes from '../src/modules/routes';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        {routes}
      </div>
    </Provider>
  );
}

export default App;
