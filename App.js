// підключаємо модуль
const mysql = require('mysql');

// конфігурація підключення
const conn = mysql.createConnection({
    host: 'localhost', // адрес бази(www.site.com)
    user: 'root', // користувач бази
    database: 'mybase', // назва бази
    password: '' // пароль від бази(якщо нема то залишаємо пусту строку)
});

// робимо підключення з базою
conn.connect(err =>{
    if(err){
        console.log(err);
        return err;
    }
    else{
        console.log('Open!');
    }
});

// робимо запрос
let query = "SELECT * FROM testtable";
conn.query(query, (err, result, field) =>{
    console.log(err); // якщо все ок то виводить NULL
    console.log(result); // в результат виводиться звичайний асоціативний масів
    //console.log(field); // дані полів таблиці
});

// закриваємо з*єднання з базою
conn.end(err=>{
    if(err){
        console.log(err);
        return err;
    }
    else{
        console.log('Close!')
    }
})
