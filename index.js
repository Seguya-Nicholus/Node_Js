// console.log("Hello World!");

//Express Package  helps in displaying content in the browser
const express = require('express');
const app = express();

const path = require('path')
//Setting up a view engine to enable us render pages
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))
//Create a server where browsers can connect

app.listen(3000,()=>{
    console.log('listening on 3000')
})


// We have the Read operation from the browser
/* syntax is app.get(path,callback) */

app.get('/',(req, res)=> {
    res.render('index')
    
})


app.get('/register', (req, res) => {
    res.render('register')

})


//query params
// http://localhost:3000/users?class=node&cohort=3
app.get('/users', (req, res)=>{
    res.send('This is class ' + req.query.class + ' cohort ' + req.query.cohort)
})

//Read operation for the about page
app.get('/about',(req,res)=>{
    res.send('This is the about us page')
})


app.post('/',(req,res)=>{
    res.send('Got a Post request')
})

app.put('/user',(req,res)=>{
    res.send('Got a PUT request at /user')
})

app.delete('/user', (req, res) => {
    res.send('Got a DELETE request at /user')
})

app.get('/users/:name', (req, res) => {
    res.send('Hello' + req.params.name)
})

// app.get('*',(req,res)=>{
//     res.send('Nothing to display')
// })


