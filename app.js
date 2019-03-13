const express = require('express');
// const ejs = require('ejs')

const todocontroller = require('./controllers/todocontrollers')


var app = express();

// set up template engine
app.set('veiw engine', 'ejs')

// static file
app.use(express.static('./public'));
// app.get('/', function(req, res){
//     // res.send('hhhh')
//     res.render('todo')
// })

todocontroller(app)
app.listen(3000)

console.log('your app is listening port 3000')