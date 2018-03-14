import React, { Component } from 'react';
import renderIf from 'render-if';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './Register.js';
import Login from './Login.js';
import Dashboard from './components/dashboard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }

  onUpdate = (val) => {
    this.setState({
      loggedIn: val
    })
  };

  render() {
    return (
      <HashRouter>
        <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
	{renderIf(this.state.loggedIn===true)(
        <Route path="/dashboard" component={Dashboard} /> )}
      </div>
      </HashRouter>


    );
  }
}

export default App;
