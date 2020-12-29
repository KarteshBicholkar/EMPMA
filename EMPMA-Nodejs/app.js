const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

const port = 5000;

//creating a connection to the database
const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ems"
});


//connecting to database
database.connect(function(err) {
    if(err) throw err;
    console.log("Connected!");
});
global.database=database;//to get the database access to all files

//configuring middleware
app.set('port', process.env.port || port);//setting the port to use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //to parse data from client
app.use(express.static(path.join(__dirname, "public")));

//configuring routes 
app.get('/',(req,res)=>{
    
    const query = 'SELECT * FROM employee';

    //execute query
    database.query(query, (err, result) => {
        if(err){
            console.log(err)
        }

   res.send({
      result
   });
});
});

app.post('/add',(req,res)=>{
    
    let name = req.body.name;
    let dept = req.body.department;
    let exp = req.body.experience;

    console.log(req.body);

    const query = "INSERT INTO employee (name,department,experience) VALUES ('"+name+"','"+dept+"','"+exp+"')";

    database.query(query,  (err, result) => {
        if(err){
            console.log(err);
        }

       
    });
});

app.post('/delete',(req,res)=>{

    const query = 'DELETE FROM employee WHERE id = "'+req.body.id+'"';

    database.query(query,  (err, result) => {
        if(err){
            console.log(err);
        }

       
    });
});


app.post('/edit',(req,res)=>{
    
    console.log('inside edit')
    let id = req.body.id;
    let name = req.body.name;
    let dept = req.body.department;
    let exp = req.body.experience;

    console.log(req.body);

    const query = 'UPDATE employee SET name="'+name+'",department="'+dept+'",experience="'+exp+'" WHERE id="'+id+'"';

    database.query(query,  (err, result) => {
        if(err){
           console.log(err)
        }

    });
});






//setting the app to listen on this port

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
