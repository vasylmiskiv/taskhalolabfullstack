const express = require('express')
const mongoose = require('mongoose')

const goodsRoutes = require('./routes/goodsRoute.js')
// import CORS
let cors = require("cors");

// get dist folder
//const serveStatic = require('serve-static')
// import path
const path = require('path') 

// import connect db;
const { connectDB } = require('./config/db.js');


// import parser for body req
//const bodyParser = require('body-parser')

// import global env var
require('dotenv').config();

// import terminal colors
const colors = require('colors');

// define port
const PORT = process.env.PORT || 5000

// start connect db
connectDB()

// init app
const app = express();

// use CORS for server
//app.use(cors());

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json parser
//app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../frontend/build')));

//app.get('/.*/', (req, res) => {
//  res.sendFile(path.join(__dirname, 'dist/index.html'))
//})

// connect to routes
app.use('/api/goods', goodsRoutes)

// start server
app.listen(PORT, () => {
  console.log(`Listeing on port ${colors.green(PORT)}...`)
})

