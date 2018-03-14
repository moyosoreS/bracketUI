import React, { Component } from 'react';
import renderIf from 'render-if';
import {
  HashRouter,
  Route,
  Link,
  Redirect,
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
        <div>
        <Route path="/login" component={Login} />
        </div>
        <div>
        <Route path="/register" component={Register} />
        </div>
        <div>
	{renderIf(this.state.loggedIn===true)(
        <Route path="/dashboard" component={Dashboard} /> )}
        </div>
        <div>
        <Route path="/" component={Login} />
        </div>
       <div>
        <Route path="/" component={Register} />
        </div>
      </div>
      </HashRouter>
	
     
    );
  }
}

export default App;
