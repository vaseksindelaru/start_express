const express = require('express');
const app = express();

// Config Express
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res) =>{res.send('Todo OK')});

module.exports = app;
