// ------------------ Data -------------------
// sh killport 7000

const employees = {

    "001": {

        
        "name_" : "Jeff",
        "dtt" : "SWD",
        "email" : "jeff@xyz.com"


    },

    "002": {

        
        "name_" : "Arpit",
        "dtt" : "SWD",
        "email" : "arpit@xyz.com"
    },

    "003": {

        
        
        "name_" : "Bhanu",
        "dtt" : "SD",
        "email" : "bhanu@xyz.com"
    },
    "004": {

       
        
        "name_" : "Mohna",
        "dtt" : "Legal",
        "email" : "mohna@xyz.com"
    }
}


//----------------------------------
// sh killport 7050
// api 

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7050;

app.use(bodyParser.json());

const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/test', (req, res) => {

    console.log('test is successful');
    res.send("test is successful");
});


// Query all 

app.get('/emplall', (req, res) => {

    console.log("Queryall: ", employees);
    res.json(employees);
    
});

// call by id
app.get('/emp/:id', (req, res) => {

    console.log("Emp: ",employees[req.params.id]);
    res.json(employees[req.params.id]);


});

// create data 

app.post('/add', (req, res) => {
    
    
    try{
    console.log('New Data: ');
    console.log(req.body.name_);
    console.log(req.body.dtt);
    console.log(req.body.email);

    
    // return {message: true};
    res.json("employee added");



        
        // let data ={
        //     name_:req.body.name_,
        //     dtt:req.body.dtt,
        //     email:req.body.email
    
        // }
    
        // console.log(data);

        // res.end(JSON.stringify(...data));
        // // console.log(req.body);
        // res.status(201).send('Create Employee');
        

    } catch (er) {

        console.error(er);
        return {message : false};
        
    }
    
});

// Update the record

app.put('/update/:id', (req, res) => {

    console.log("Updating ....", req.body);
    const id = req.params.id;
    const emp = req.body;

    const upd = employees[id];

    if (!upd)
    {

        return res.status(404).json('Error in finding ID..');
    }

    if(emp.name_)
    {   
        upd.name_ = emp.name_;
    }

    if(emp.dtt)
    {   
        upd.dtt = emp.dtt;
    }

    if(emp.email)
    {   
        upd.email = emp.email;
    }

    return res.status(201).json(upd);
});
    


// Server 
app.listen(port, () => {

    console.log(`Listening port: ${port}`);

})