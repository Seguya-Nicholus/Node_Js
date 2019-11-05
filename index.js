// console.log("Hello World!");

//Express Package  helps in displaying content in the browser
const express = require('express');
const app = express();

//Create a server where browsers can connect

app.listen(3000,function(){
    console.log('listening on 3000')
})


// We have the Read operation from the browser
/* syntax is app.get(path,callback) */

app.get('/',function (req, res) {
    res.send('Hello World')
    
})