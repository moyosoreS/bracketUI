
var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var oracledb = require('oracledb');

oracledb.autoCommit = true;

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var connAttrs = {    
"user":"nbadb",    
"password":"nbadb",    
"connectString":"129.150.89.212/ORCL.gse00013027.oraclecloud.internal"}

app.get('/login', function (req, res) {

   "use strict";    oracledb.getConnection(connAttrs, function (err, connection) {

       if (err) {

           // Error connecting to DB

           res.set('Content-Type', 'application/json');

           res.status(500).send(JSON.stringify({

               status: 500,

               message: "Error connecting to DB",

               detailed_message: err.message

           }))

}

    else

    console.log('Successfully connected to Oracle Database');
    var users={ 
                "EMAIL":req.body.email,
                "PASSWORD":req.body.password,

          }

    connection.execute("SELECT email, password FROM USERS WHERE EMAIL = " +"'"+req.body.email +"'"+" and "+ "password =" +"'"+req.body.password+"'" , function (error, results, fields) {
                 if (error) {
                             console.log("User not Found. Please try again!",error);
                             res.send({ "code":400,"failed":"error ocurred" })
                }
                else{       console.log('The solution is: ', results);
			                      console.log('The fields are: ', fields);
                            res.send({"code":200,"success":"User sucessfully loggedIn!"}); 
			    connection.release();
     			    
}
})

})
});

app.post('/register', function (req, res) 

{   "use strict";    

oracledb.getConnection(connAttrs, function (err, connection) {       

if (err) {           // Error connecting to DB           
res.set('Content-Type', 'application/json');           
res.status(500).send(JSON.stringify({status: 500,message: "Error connecting to DB",detailed_message: err.message}))}    
else    
console.log('Successfully connected to Oracle Database');

var users={ "ID":req.body.id,

            "FIRSTNAME":req.body.first_name,

               "LASTNAME":req.body.last_name,

               "EMAIL":req.body.email,

               "PASSWORD":req.body.password,}   

connection.execute("INSERT INTO USERS (ID,FIRSTNAME,LASTNAME,EMAIL, PASSWORD) VALUES ("+"'" + req.body.id +"'" + ','+"'" + req.body.first_name +"'" +','+"'"+ req.body.last_name +"'" + ','+"'"+ req.body.email +"'" + ',' +"'"+ req.body.password+"'" + ")", function (error, results, fields) {

                if (error) {

                            console.log("error ocurred",error);

                            res.send({ "code":400,"failed":"error ocurred" })

               }

               else{       console.log('The solution is: ', results);

                console.log('The fields are: ', fields);

                   res.send({"code":200,"success":"user registered sucessfully"});
                   connection.release();

                    

}

})})

});

var server = app.listen(5000, function () {   

"use strict";    

var host = server.address().address,       

port = server.address().port;    

console.log(' Server is listening at http://%s:%s', host, port);});
