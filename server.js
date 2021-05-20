const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const courselib = require('./backend/lib/courselib');
const connect = require('./backend/lib/dbconnect');
const config = require('./backend/config/config');

 app.use(express.urlencoded({extended: true}));
 app.use(express.json());
 
app.use(express.static(path.join(__dirname, "static")));

connect.connect();

app.get("/", function(req, res){
    res.send("Welcome to My Site");
})
 

app.get("/crudd", function(req, res){
    filePathName=__dirname+'/static/html/crud.html';
    res.sendFile(filePathName);
})
app.get("/crud", courselib.getall);
app.delete("/crud/:idd", courselib.deleteone);
app.put("/crud/:idd", courselib.update);
app.post("/crud",courselib.addnewone);
const PORT = config.webPort;
 
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
})

