
//var React = require('react');
//var MuiThemeProvider = require('material-ui');
//var axios = require('axios');
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  HashRouter,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
//import axios from 'axios';
//import OracleDB from "oracledb";
var axios = require('axios');
//import oracledb from '/home/moyo/screen/node_modules/oracledb/';
//require('/home/moyo/screen/node_modules/oracledb/build/Release/oracledb.node');
//var oracledb = require('/home/moyo/screen/node_modules/oracledb/lib/oracledb.js');
//require('/home/moyo/screen/node_modules/oracledb/lib/connection.js');
//require('/home/moyo/screen/node_modules/oracledb/build/Release/oracledb.node');

//import oracledb from '/home/moyo/screen/node_modules/oracledb/build/Release/oracledb.node';
"use strict";
//var oracledb = require('/usr/lib/node_modules/oracledb/build/Release/obj.target/oracledb.node');
//console.log(oracledb.node);
//var oracle = require('/usr/lib/node_modules/oracledb/lib/oracledb');
//var oracledb = require("oracledb");



class Register extends Component {
  handleClick(event){
   
   let config = {
    headers: { "Access-Control-Allow-Origin":"*"}
}
   var apiBaseUrl = "http://localhost:3000/register";
   var connAttrs = {

    "user":"nbadb",

    "password":"nbadb",

    "connectString":"129.150.89.212/ORCL.gse00013027.oraclecloud.internal"

   }
   
   console.log("values",this.state.id,this.state.first_name,this.state.last_name,this.state.email,this.state.password);
   
   var self = this;

   var payload={
    "id":this.state.id,
    "first_name": this.state.first_name,
    "last_name":this.state.last_name,
    "email":this.state.email,
    "password":this.state.password,
    }
   
  axios.post(apiBaseUrl, payload)
 .then(function (response) {
 		console.log(response);
 	if(response.data.code == 200){
 		console.log("Register successfull");
	self.setState({toLogin: true});
 
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
//    var oracledb = require('oracledb');


  constructor(props){
    super(props);
    this.state={
      id:'',
      first_name:'',
      last_name:'',
      email:'',
      password:'',
      toLogin: false,
    }
  }
  render() {
     if (this.state.toLogin === true) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
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

export default Register;
