//node
//const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

//app.use((req, res, next) => {
  //  console.log('In the middleware!');
    //next();
//});

//app.use('/',(req,res,next)=>{
  //  console.log('This always runs!');
    //next();
//})

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<form><input action="/product" method="POST" type="text" name="title"><button type="submit">SEND</button><form>')
});

app.use('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!<h1>')
});

//const server = http.createServer(app);

//server.listen(8000);

app.listen(4000);