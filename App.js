const mysql = require('mysql');


const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mybase',
    password: ''
});

conn.connect(err =>{
    if(err){
        console.log(err);
        return err;
    }
    else{
        console.log('Open!');
    }
});

let query = "SELECT * FROM testtable";
conn.query(query, (err, result, field) =>{
    console.log(err);
    console.log(result);
    //console.log(field);

});

conn.end(err=>{
    if(err){
        console.log(err);
        return err;
    }
    else{
        console.log('Close!')
    }
})
