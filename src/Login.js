import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import {
  HashRouter,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

import App from './App.js';


"use strict";
//var oracledb = require('/home/moyo/screen/node_modules/oracledb/build/Release/oracledb.node');
//var oracledb = require('oracledb');

class Login extends Component {

handleClick(event){
  var apiBaseUrl = "http://localhost:3000/login";

  var connAttrs = {

    "user":"nbadb",

    "password":"nbadb",

    "connectString":"129.150.89.212/ORCL.gse00013027.oraclecloud.internal"

  }
  
  console.log("values",this.state.email,this.state.password);

  var self = this;
  var payload={
    "email":this.state.email,
    "password":this.state.password
    }
 
  axios.get(apiBaseUrl)
 .then(function (response) {
 		console.log(response);
 	if(response.data.code == 200){
 		console.log("Login successfull");
	self.setState({toDashboard: true});
        self.props.loggedIn(true);
        alert("Successfully Logged In!!");
 }

 else if(response.data.code == 204){
 console.log("Username password do not match");
 alert("username password do not match")
 }
 else{
 console.log("Username does not exists");
 alert("Username does not exist");
 }
 })
 .catch(function (error) {
 console.log(error);
 });

}

constructor(props){
  super(props);
  this.state={
  email:'',
  password:'',
  toDashboard: false,
  }
 }
render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/dashboard' />
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;
