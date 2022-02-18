// mongodb connection

const express = require('express');
const app = express();
const mongo = require('mongoose');
const port = 9000;


// connecting mongoDB

mongo.connect('mongodb+srv://CD:mongo1234@myserver.92rfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongo.connection.on('error', err => {
    console.log('Connection Failed');

});

mongo.connection.on('connected', connected => {
  
    console.log('Connection with DB Successfull');

})

app.use('/', (req, res) => {

    res.send('Testing ApI');
})


app.listen(port, () => { console.log(`Listening port : ${port}`)});